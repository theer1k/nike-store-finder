import type { Meta, StoryObj } from '@storybook/react';
import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Dropdown, DropdownOption } from '.';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

type DropdownProps = React.ComponentProps<typeof Dropdown>;

const MockedComponentWithParentAndProviders = (args: DropdownProps) => {
  const store = configureAppStore();

  const options = [
    { key: 1, title: 'Option #1' },
    { key: 2, title: 'Option #2' },
  ];

  const [optionSelectedState, setOptionSelected] = useState<DropdownOption>(
    options[0],
  );

  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <div
          style={{
            width: '50%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Dropdown
            {...args}
            optionSelectedState={optionSelectedState}
            setOptionSelected={setOptionSelected}
            options={options}
          />
        </div>
      </ThemeProviderWrapper>
    </Provider>
  );
};

export const Default: Story = {
  render: args => {
    return MockedComponentWithParentAndProviders(args);
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { NewsLetter } from '.';

const meta: Meta<typeof NewsLetter> = {
  component: NewsLetter,
  args: {
    placeholder: 'Search input',
    isRounded: true,
  },
};

export default meta;
type Story = StoryObj<typeof NewsLetter>;

export const Default: Story = {
  render: () => {
    const store = configureAppStore();
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
            <NewsLetter />
          </div>
        </ThemeProviderWrapper>
      </Provider>
    );
  },
};

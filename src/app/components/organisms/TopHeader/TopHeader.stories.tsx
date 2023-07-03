import type { Meta, StoryObj } from '@storybook/react';
import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { TopHeader } from '.';

const meta: Meta<typeof TopHeader> = {
  component: TopHeader,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopHeader>;

export const Default: Story = {
  render: () => {
    const store = configureAppStore();

    return (
      <Provider store={store}>
        <ThemeProviderWrapper>
          <BrowserRouter>
            <div
              style={{
                width: '100%',
              }}
            >
              <TopHeader />
            </div>
          </BrowserRouter>
        </ThemeProviderWrapper>
      </Provider>
    );
  },
};

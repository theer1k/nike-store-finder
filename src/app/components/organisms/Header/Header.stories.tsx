import type { Meta, StoryObj } from '@storybook/react';
import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { Header } from '.';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => {
    const store = configureAppStore();

    return (
      <Provider store={store}>
        <ThemeProviderWrapper>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </ThemeProviderWrapper>
      </Provider>
    );
  },
};

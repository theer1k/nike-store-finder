import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { Header } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

const MockedComponentWithParentAndProviders = (store: Store) =>
  render(
    <Provider store={store}>
      <ThemeProviderWrapper>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ThemeProviderWrapper>
    </Provider>,
  );

describe('<Header  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } =
      MockedComponentWithParentAndProviders(store);

    const headerElement = getByTestId('header');

    expect(headerElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

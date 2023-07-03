import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { TopHeader } from '..';

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
          <TopHeader />
        </BrowserRouter>
      </ThemeProviderWrapper>
    </Provider>,
  );

describe('<TopHeader  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } =
      MockedComponentWithParentAndProviders(store);

    const topHeaderElement = getByTestId('topHeader');

    expect(topHeaderElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

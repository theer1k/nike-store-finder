import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { NewsLetter } from '..';

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
        <NewsLetter />
      </ThemeProviderWrapper>
    </Provider>,
  );

describe('<NewsLetter  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } =
      MockedComponentWithParentAndProviders(store);

    const newsLetterElement = getByTestId('newsLetter');

    expect(newsLetterElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

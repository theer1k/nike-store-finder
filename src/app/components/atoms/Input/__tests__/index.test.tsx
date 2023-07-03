import { render } from '@testing-library/react';

import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { configureAppStore } from 'store/configureStore';
import { Input } from '..';

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

type InputProps = React.ComponentProps<typeof Input>;

const MockedComponentWithParentAndProviders = (
  props: InputProps,
  store: Store,
) =>
  render(
    <Provider store={store}>
      <ThemeProviderWrapper>
        <Input {...props} />
      </ThemeProviderWrapper>
    </Provider>,
  );

describe('<Input />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = MockedComponentWithParentAndProviders(
      {
        type: 'search',
        placeholder: 'placeholder',
      },
      store,
    );

    const searchElement = getByTestId('input');

    expect(searchElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

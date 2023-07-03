import { Store } from '@reduxjs/toolkit';
import { fireEvent, render } from '@testing-library/react';

import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Button } from '..';

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

type ButtonProps = React.ComponentProps<typeof Button>;

const MockedComponentWithParentAndProviders = (
  props: ButtonProps,
  store: Store,
) =>
  render(
    <Provider store={store}>
      <ThemeProviderWrapper>
        <Button {...props} />
      </ThemeProviderWrapper>
    </Provider>,
  );

describe('<Button  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = MockedComponentWithParentAndProviders(
      {
        label: 'Label',
      },
      store,
    );

    const buttonElement = getByTestId('button');

    expect(buttonElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match label inside the button', () => {
    const { getByTestId } = MockedComponentWithParentAndProviders(
      {
        label: 'Label',
      },
      store,
    );

    const buttonElement = getByTestId('button');
    expect(buttonElement).toHaveTextContent('Label');
  });

  it('should trigger passed onClick function', async () => {
    const onClick = jest.fn();

    const button = MockedComponentWithParentAndProviders(
      {
        label: 'Label',
        onClick,
      },
      store,
    );

    fireEvent.click(button.getByText('Label'));
    expect(onClick).toHaveBeenCalled();
  });
});

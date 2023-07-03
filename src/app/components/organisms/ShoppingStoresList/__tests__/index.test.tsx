import { render } from '@testing-library/react';

import { DropdownOption } from 'app/components/molecules/Dropdown';
import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { ShoppingStoresMockData } from 'mocks/nike-stores/shopping-stores-data';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { configureAppStore } from 'store/configureStore';
import { ShoppingStore } from 'types';
import { Props, ShoppingStoresList } from '..';

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

const shoppingStoresMock: ShoppingStore[] = ShoppingStoresMockData;

const MockedComponentWithParentAndProviders = (
  props: Partial<Props>,
  store: Store,
) => {
  const { shoppingStores } = props;

  const [, setShoppingStoreSelected] = React.useState<ShoppingStore | null>(
    shoppingStoresMock[0],
  );

  const filterOptions = [
    { key: 1, title: 'Filter #1' },
    { key: 2, title: 'Filter #2' },
  ];

  const [filterOptionSelected, setFilterOptionSelected] =
    useState<DropdownOption>(filterOptions[0]);

  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <IntlProvider locale={navigator.language}>
          <ShoppingStoresList
            {...props}
            shoppingStores={shoppingStores ?? []}
            filterOptions={filterOptions}
            filterOptionSelected={filterOptionSelected}
            setFilterOptionSelected={setFilterOptionSelected}
            setShoppingStoreSelected={setShoppingStoreSelected}
          />
        </IntlProvider>
      </ThemeProviderWrapper>
    </Provider>
  );
};

describe('<ShoppingStoresList  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const ParentComponent = () =>
      MockedComponentWithParentAndProviders(
        {
          shoppingStores: shoppingStoresMock,
        },
        store,
      );

    const { getByTestId, container } = render(<ParentComponent />);
    const shoppingStoresListElement = getByTestId('shoppingStoresList');

    expect(shoppingStoresListElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

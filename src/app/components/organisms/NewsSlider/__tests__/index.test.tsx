import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';

import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { NewsSlider } from '..';

const MockedComponentWithParentAndProviders = (store: Store) =>
  render(
    <Provider store={store}>
      <ThemeProviderWrapper>
        <BrowserRouter>
          <NewsSlider />
        </BrowserRouter>
      </ThemeProviderWrapper>
    </Provider>,
  );

describe('<NewsSlider  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } =
      MockedComponentWithParentAndProviders(store);
    const newsSliderElement = getByTestId('newsSlider');

    expect(newsSliderElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

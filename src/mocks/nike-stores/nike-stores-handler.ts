import { environment } from 'environment';
import { http, HttpResponse, delay } from 'msw';
import { ShoppingStore } from 'types';
import { GetKilometersBetweenPoints } from 'utils/helpers';
import { ShoppingStoresMockData } from './shopping-stores-data';

export const nikeStoresHandler = [
  http.get(`${environment.apiURL}/nike-stores`, async ({ request }) => {
    await delay(1500);

    const url = new URL(request.url);

    const lat = url.searchParams.get('lat') ?? '0';
    const lng = url.searchParams.get('lng') ?? '0';

    return HttpResponse.json(
      ShoppingStoresMockData.map(shoppingStore => ({
        ...shoppingStore,
        distance: GetKilometersBetweenPoints({
          latitudeA: parseFloat(lat),
          longitudeA: parseFloat(lng),
          latitudeB: shoppingStore.address.lat,
          longitudeB: shoppingStore.address.lng,
        }),
      })) as ShoppingStore[],
    );
  }),
];

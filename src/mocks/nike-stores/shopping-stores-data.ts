import { ShoppingStore } from 'types';

export const ShoppingStoresMockData: ShoppingStore[] = [
  {
    id: 1,
    placeName: 'Nike Sherway Gardens',
    address: {
      lat: 43.611961,
      lng: -79.557213,
      location: '25 The West Mall #1180A, Etobicoke, ON M9C 1B8',
    },
    availability: 4,
    workingHours:
      'Monday to Saturday from 10 a.m until 9 p.m | Sunday from 10 a.m until 7 p.m',
  },
  {
    id: 2,
    placeName: '1 Bass Pro Mills Dr Suite E3',
    address: {
      lat: 43.82539,
      lng: -79.5389,
      location: '1 Bass Pro Mills Dr Suite E3, Concord, ON L4K 5W4',
    },
    availability: 6,
    workingHours:
      'Monday to Saturday from 10 a.m until 9 p.m | Sunday from 10 a.m until 8 p.m',
  },
  {
    id: 3,
    placeName: 'Nike Scarborough Town Centre',
    address: {
      lat: 43.7765546,
      lng: -79.258034,
      location: '300 Borough Dr, Scarborough, ON M1P 4P5',
    },
    availability: 2,
    workingHours:
      'Monday to Saturday from 11 a.m until 9 p.m | Sunday from 10 a.m until 7 p.m',
  },
];

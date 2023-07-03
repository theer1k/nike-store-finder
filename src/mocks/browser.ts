import { setupWorker } from 'msw/browser';
import { nikeStoresHandler } from './nike-stores/nike-stores-handler';

export const worker = setupWorker(...nikeStoresHandler);

import { registerPlugin } from '@capacitor/core';

import type { PlotlinePushPlugin } from './definitions';

const PlotlinePush = registerPlugin<PlotlinePushPlugin>('PlotlinePush', {
  web: () => import('./web').then(m => new m.PlotlinePushWeb()),
});

export * from './definitions';
export { PlotlinePush };

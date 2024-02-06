import { WebPlugin } from '@capacitor/core';

import type { PlotlinePushPlugin } from './definitions';

export class PlotlinePushWeb extends WebPlugin implements PlotlinePushPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

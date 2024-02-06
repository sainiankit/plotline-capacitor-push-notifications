export interface PlotlinePushPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

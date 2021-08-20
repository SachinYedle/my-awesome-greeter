export const Geeter = (env: string) => {
  const config = require(`../lib/${env}.yaml`);
  return config;
};

import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

export function loadEnv() {
  let path = '';
  switch (process.env.NODE_ENV) {
    case 'test':
      path = '.env.test';
      break;
    case 'development':
      path = '.env.development';
      break;
    default:
      path = '.env';
      break;
  }

  const currentEnvs = dotenv.config({ path });
  dotenvExpand.expand(currentEnvs);
}

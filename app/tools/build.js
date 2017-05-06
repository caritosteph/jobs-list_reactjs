/* eslint-disable no-console */
import webpack from 'webpack';
import config from '../webpack.config.prod';

process.env.NODE_ENV = 'production';

webpack(config).run((error) => {
  if (error) {
    return 1;
  }

  console.log('Your app is compiled in production mode in /dist. It\'s ready to roll!');

  return 0;
});

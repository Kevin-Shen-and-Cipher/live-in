/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    title: 'LiveIn',
    description: '',
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
}
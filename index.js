module.exports = (nextConfig = {}) => {
  // eslint-disable-next-line prefer-object-spread
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade',
        );
      }

      const {dir} = options;

      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        use: 'graphql-mini-transforms/webpack',
        exclude: /node_modules/,
        include: [dir],
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};

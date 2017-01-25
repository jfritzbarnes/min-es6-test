module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      //{pattern: 'test/**/*.js'}
      //'src/**/*.js',
      'test/**/*.js',
    ],

    frameworks: ['jasmine'],
    preprocessors: {
      'test/**/*.js': ['webpack'],
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            //query: {
            //  presets: ['es2015']
            //}
          }
        ]
      },
      watch: true
    },

    singleRun: true,

    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        {type: 'html', dir: 'coverage/'},
        {type: 'text-summary'},
      ]
    },
  });
};

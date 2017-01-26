function getTestSpecs(specList) {
  if(specList) {
    return specList.split(',');
  } else {
    return ['test/**/*.js'];
  }
}

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      //{pattern: 'test/**/*.js'}
      //'src/**/*.js',
      //'test/**/*.js',
    ].concat(getTestSpecs(process.env.KARMA_SPECS)),

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
            query: {
              presets: ['es2015'],
              plugins: ['istanbul', 'babel-plugin-rewire']
            }
          }
        ]
      },
      watch: true
    },

    singleRun: true,

    reporters: ['progress', 'spec', 'coverage'],
    coverageReporter: {
      reporters: [
        {type: 'html', dir: 'coverage/'},
        {type: 'text-summary'},
      ]
    },
  });
};

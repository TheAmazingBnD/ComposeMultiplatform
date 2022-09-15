{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/mnt/c/users/bnd25/OneDrive/Desktop/Projects/New folder/ComposeMultiplatform/build/js/packages/MultiplatformTest-web/kotlin/MultiplatformTest-web.js'
    ]
  },
  output: {
    path: '/mnt/c/users/bnd25/OneDrive/Desktop/Projects/New folder/ComposeMultiplatform/web/build/distributions',
    filename: [Function: filename],
    library: 'web',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    open: true,
    contentBase: [
      '/mnt/c/users/bnd25/OneDrive/Desktop/Projects/New folder/ComposeMultiplatform/web/build/processedResources/js/main'
    ]
  }
}
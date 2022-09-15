let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/mnt/c/users/bnd25/OneDrive/Desktop/Projects/New folder/ComposeMultiplatform/build/js/packages/MultiplatformTest-web/kotlin/MultiplatformTest-web.js"]
};

config.output = {
    path: "/mnt/c/users/bnd25/OneDrive/Desktop/Projects/New folder/ComposeMultiplatform/web/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "web.js"
            : "web-[name].js";
    },
    library: "web",
    libraryTarget: "umd",
    globalObject: "this"
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';

config.stats = config.stats || {}
Object.assign(config.stats, config.stats, {
    warningsFilter: [/Failed to parse source map/]
})


// dev server
config.devServer = {
  "open": true,
  "contentBase": [
    "/mnt/c/users/bnd25/OneDrive/Desktop/Projects/New folder/ComposeMultiplatform/web/build/processedResources/js/main"
  ]
};

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace("/mnt/c/users/bnd25/OneDrive/Desktop/Projects/New folder/ComposeMultiplatform/build/js", '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/mnt/c/users/bnd25/OneDrive/Desktop/Projects/New folder/ComposeMultiplatform/web/build/reports/webpack/MultiplatformTest-web/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config

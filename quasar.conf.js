// quasar.conf.js
/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

module.exports = function (/* ctx */) {
    return {
      // https://quasar.dev/quasar-cli/supporting-ts
      supportTS: false,
  
      // https://quasar.dev/quasar-cli/prefetch-feature
      // preFetch: true,
  
      // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
      css: [
        'app.scss'
      ],
  
      // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-extras
      extras: [
        'roboto-font',
        'material-icons'
      ],
  
      // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
      build: {
        vueRouterMode: 'hash', // available values: 'hash', 'history'
  
        // transpile: false,
        // publicPath: '/',
  
        // https://quasar.dev/quasar-cli/handling-webpack
        extendWebpack (cfg) {
          // do something with Webpack cfg
        }
      },
  
      // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
      devServer: {
        https: false,
        port: 8080,
        open: true // opens browser window automatically
      },
  
      // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
      framework: {
        iconSet: 'material-icons', // Quasar icon set
        lang: 'en-US', // Quasar language pack
  
        // Possible values for "all":
        // * import everything from Quasar
        // * only import what's used
        //
        // (https://quasar.dev/quasar-cli/treeshaking)
        all: 'auto',
  
        components: [





          
        ],
        directives: [],
  
        // Quasar plugins
        plugins: []
      },
  
      // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-animations
      animations: [],
  
      // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-ssr
      ssr: {
        pwa: false
      },
  
      // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
      pwa: {
        workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
        workboxOptions: {}, // only for GenerateSW
        manifest: {
          name: `Quasar App`,
          short_name: `Quasar App`,
          description: `A Quasar Framework app`,
          display: 'standalone',
          orientation: 'portrait',
          background_color: '#ffffff',
          theme_color: '#027be3',
          icons: [
            {
              src: 'icons/icon-128x128.png',
              sizes: '128x128',
              type: 'image/png'
            },
            {
              src: 'icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icons/icon-256x256.png',
              sizes: '256x256',
              type: 'image/png'
            },
            {
              src: 'icons/icon-384x384.png',
              sizes: '384x384',
              type: 'image/png'
            },
            {
              src: 'icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      },
  
      // https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
      cordova: {
        // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
      },
  
      // https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
      capacitor: {
        hideSplashscreen: true
      },
  
      // https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
      electron: {
        bundler: 'packager', // 'packager' or 'builder'
  
        packager: {
          // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
          // OS X / Mac App Store
          // appBundleId: '',
          // appCategoryType: '',
          // osxSign: '',
          // protocol: 'myapp://path',
  
          // Windows only
          // win32metadata: { ... }
        },
  
        builder: {
          // https://www.electron.build/configuration/configuration
          appId: 'my-app'
        },
  
        // keep in sync with /src-electron/main-process/electron-main.dev.js
        // will be merged with custom Electron configuration (if any)
        extendWebpack (cfg) {
          // do something with Webpack cfg
        }
      },
  
      // https://quasar.dev/quasar-cli/developing-browser-extensions/configuring-extension
      bex: {
        contentScripts: [
          'my-content-script'
        ]
      }
    }
  }
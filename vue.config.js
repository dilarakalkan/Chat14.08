const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],

  devServer:{

    proxy: {
    '/socket.io': {
    target:'http://localhost:8083',
    
    ws: true, // Enable WebSocket proxying
    changeOrigin: true,
    }
  }
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
})

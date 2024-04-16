

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vueJsx from '@vitejs/plugin-vue-jsx'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  indexPath: 'index.php',
  // Добавляем это:
      chainWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        config
          .plugin('html')
          .tap(args => {
            args[0].template = './src/index_template.php'
            args[0].minify.removeAttributeQuotes = false
            return args
          })
      }
  }
})

import { defineConfig } from 'minista'
import path from 'path'
import globalScopedNameBEM from './src/globalScopedNameBEM.js'

export default defineConfig({
  root: '',
  base: '',
  public: 'public',
  out: 'dist',

  assets: {
    outDir: 'assets',
    outName: '[name]',
    images: {
      outDir: 'assets/images',
      outName: '[name]',
      remoteName: 'remote',
      optimize: {
        layout: 'constrained',
        breakpoints: [
          360, 400, 640, 800, 1024, 1280, 1440, 1920, 2560, 2880, 3840,
        ],
        resolution: [1, 2],
      },
    },
    svgr: {
      svgrOptions: {},
    },
    icons: {
      srcDir: 'src/assets/icons',
      outDir: 'assets/images',
      outName: '[dirname]',
      svgstoreOptions: {
        cleanSymbols: ['fill', 'stroke'],
      },
    },

    fonts: {
      outDir: 'assets/fonts',
      outName: '[name]',
    },

    bundle: {
      outName: 'main',
    },
  },

  resolve: {
    alias: [
      {
        find: '@/',
        replacement: path.resolve('src') + '/',
      },
    ],
  },

  css: {
    modules: {
      scopeBehaviour: 'local',
      globalModulePaths: [],
      generateScopedName: (context, localIdentName, localName) =>
        globalScopedNameBEM(context, localIdentName),
      hashPrefix: '',
      localsConvention: 'dashesOnly',
    },
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
      less: {},
      stylus: {},
    },
  },
  vite: {},
})

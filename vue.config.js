module.exports = {
    devServer: {
		proxy: {
			'/oAuth': {
				target: 'http://127.0.0.1:7001',
				changeOrigin: true
			}
		}
	},
    configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'img': '@/assets/images',
				'components': '@/components',
				'pages': '@/pages',
				'views': '@/views'
			}
		}
	},

    runtimeCompiler: true,
    productionSourceMap: false
}

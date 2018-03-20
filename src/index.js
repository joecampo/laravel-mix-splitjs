let mix = require('laravel-mix');

let webpack = require('webpack');

class SplitJs {
    constructor() {
        this.config = {
            maxChunks: 1000,
            productionOnly: true,
            publicPath: '/',
            chunkFileName: 'js/[name].[chunkhash].js',
        };
    }

    register(config) {
        this.config = { ...this.config, ...config };
    }

    boot() {
        Config.webpackConfig = require('webpack-merge').smart(Config.webpackConfig, {
            output: {
                publicPath: this.config.publicPath,
                chunkFilename: this.config.chunkFileName,
            },
            plugins: [
                new webpack.optimize.LimitChunkCountPlugin({
                    maxChunks: this.config.productionOnly ? (mix.inProduction() ? this.config.maxChunks : 1) : this.config.maxChunks,
                }),
            ],
        });
    }
}

mix.extend('splitJs', new SplitJs());

const {createProxyMiddleware} = require("http-proxy-middleware")


module.exports = app => {
    app.use(
        createProxyMiddleware('/user/create',
        {
            target: 'https://blue-journalist-bbrpv.ineuron.app:4000',
            changeOrigin: true
        }
        )
    )
}
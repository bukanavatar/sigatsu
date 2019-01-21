const { createServer } = require('http')
const { join } = require('path')
const { parse } = require('url')
const next = require('next')
const express = require('express')
const compression = require('compression');
const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express();

        createServer((req, res) => {
            const parsedUrl = parse(req.url, true)
            const { pathname } = parsedUrl
            // handle GET request to /service-worker.js
            if (pathname === '/service-worker.js') {
                const filePath = join(__dirname, '.next', pathname)

                app.serveStatic(req, res, filePath)
            } else {
                handle(req, res, parsedUrl)
            }
            server.use(compression());
        })
            .listen(3000, () => {
                console.log(`> Ready on http://localhost:${3000}`)
            })
    })
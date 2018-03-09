import * as express from 'express'
import * as compression from 'compression'
import * as next from 'next'

const isDev: boolean = process.env.NODE_ENV === 'development'
const port = process.env.PORT || 3000

const app = next({ dev: isDev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.use(compression())

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) {
          throw err
        }

        console.log(`> Ready on http://localhost:${port}`)
      })
  })

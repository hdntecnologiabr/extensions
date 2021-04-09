import { createLogger, format } from 'winston'
import BrowserTransport from './browserTransport'

const { combine, simple, timestamp, json } = format
const LEVEL = process.env.LOG_LEVEL
const NODE_ENV = process.env.NODE_ENV || 'development'

const browserFormat = combine(
  simple()
)

const jsonFormat = combine(
  timestamp(),
  json()
)

const log = createLogger({
  level: LEVEL || 'debug',
  format: NODE_ENV === 'production' ? jsonFormat : browserFormat,
  transports: [
    new BrowserTransport({
      level: LEVEL || 'debug'
    })
  ]
})

export default log

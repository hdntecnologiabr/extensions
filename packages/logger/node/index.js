const { hostname } = require('os')
const { createLogger, transports, format } = require('winston')

const { combine, colorize, printf, timestamp, errors, json } = format
const LEVEL = process.env.LOG_LEVEL
const NODE_ENV = process.env.NODE_ENV || 'development'

const colorFormat = combine(
  errors({ stack: true }),
  colorize(),
  printf(logMessage => `${logMessage.level}: ${logMessage.message}`)
)

const jsonFormat = combine(
  errors({ stack: true }),
  timestamp(),
  json()
)

const isProduction = NODE_ENV.includes('production')

const getTransports = () => {
  return isProduction ? [
    new transports.Console({
      handleExceptions: true,
      format: colorFormat
    }),
    new transports.File({ filename: 'error.log', level: 'error', format: jsonFormat }),
    new transports.File({ filename: 'combined.log', format: jsonFormat })
  ] : [
    new transports.Console({
      handleExceptions: true,
      format: colorFormat
    })
  ]
}

const log = createLogger({
  level: LEVEL || 'silly',
  defaultMeta: {
    hostname: hostname()
  },
  transports: getTransports()
})
module.exports = log

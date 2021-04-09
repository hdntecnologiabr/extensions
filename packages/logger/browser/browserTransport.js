import TransportStream from 'winston-transport'
import 'setimmediate' // setimmediate attaches itself to the global object

const METHODS = {
  error: 'error',
  warn: 'warn',
  info: 'info',
  debug: 'debug'
}

const COLORS = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  debug: 'pink'
}

const LOG_LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3
}

export default class BrowserTransport extends TransportStream {
  constructor (opts) {
    super(opts)

    this.level = opts.level && Object.hasOwnProperty.call(METHODS, opts.level)
      ? opts.level : 'debug'
  }

  log (logEntry, next = () => {}) {
    const { message, level } = logEntry

    setImmediate(() => {
      this.emit('logged', logEntry)
    })

    const mappedMethod = METHODS[level]
    let args = logEntry[Object.getOwnPropertySymbols(logEntry)[1]]
    args = Array.isArray(args) ? args[0] : undefined

    if (LOG_LEVELS[level] <= LOG_LEVELS[this.level]) {
      args
        ? console[mappedMethod].call(
          null,
          `%c${mappedMethod.toUpperCase()}%c ${message} \n`,
          `color: ${COLORS[level]}`,
          'color: auto',
          args
        )
        : console[mappedMethod].call(
          null,
          `%c${mappedMethod.toUpperCase()}%c ${message} \n`,
          `color: ${COLORS[level]}`,
          'color: auto'
        )
    }

    next()
  }
}

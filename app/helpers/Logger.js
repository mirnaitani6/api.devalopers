const winston = require('winston');
let path = require("path");

const options = {
  file: {
    level: 'info',
    filename: './logs/app-info.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format:winston.format.combine(
      winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
      winston.format.align(),
      winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
   )
  },
  file_error: {
    level: 'error',
    filename: './logs/app-error.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format:winston.format.combine(
      winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
      winston.format.align(),
      winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
   )
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    format:winston.format.combine(
      winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
      winston.format.align(),
      winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
   )   
  },
  console_error: {
    level: 'error',
    handleExceptions: true,
    json: false,
    colorize: true,
    format:winston.format.combine(
      winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
      winston.format.align(),
      winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
   )   
  }
};

const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.File(options.file_error),
    new winston.transports.Console(options.console),
    new winston.transports.Console(options.console_error)
  ],
  exitOnError: false
})

module.exports = logger
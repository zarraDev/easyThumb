import { createLogger, format, transports } from 'winston';

const { combine, timestamp, json, colorize } = format;

const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(
    ({ level, message, timestamp }) => `${level}: ${message} \nTime stamp: ${timestamp}\n-----`
  )
);

const loggerApp = createLogger({
  level: 'info',
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({
      filename: 'app.log',
    }),
  ],
});

export default loggerApp;

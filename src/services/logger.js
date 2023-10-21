import pino from 'pino';
import dayjs from 'dayjs';

const logger = pino({
  timestamp: () => `,"time":"${dayjs().format('MMM DD, YYYY h:mma')}"`,
  level: process.env.PINO_LOG_LEVEL || 'info',
});

export default logger;

// logger.js
import pino from 'pino';
import pretty from 'pino-pretty';

// 判断是否是开发环境
const isDev = process.env.NODE_ENV !== 'production';

const logger = pino({
  level: isDev ? 'debug' : 'warn',
  // timestamp: pino.stdTimeFunctions.isoTime,
},
  isDev && pretty(
    {
      // colorize: true,
      translateTime: 'SYS:standard', // 使用系统时间格式
      // ignore: 'pid,hostname'         // 忽略 pid 和 hostname 字段
    }
  )
);


export default logger;

import mongoose from 'mongoose';
import {
  DB_CONNECTION_STRING,
  DB_HOST,
  DB_PORT,
  DB_NAME
} from '../utils/env';
import loggerApp from '../utils/logger';

const getMongoUri = () => {
  if (DB_CONNECTION_STRING) {
    return DB_CONNECTION_STRING;
  }
  return `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
};

export const connectDB = async () => {
  try {
    const uri = getMongoUri();
    await mongoose.connect(uri, {
      // useNewUrlParser and useUnifiedTopology are default in mongoose >=6
    });
    loggerApp.info('MongoDB connected successfully');
  } catch (error) {
    loggerApp.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
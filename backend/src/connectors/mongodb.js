/**
 * Open connection to mongodb database
 */

import Mongoose from 'mongoose';
import Promise from 'bluebird';
import logger from '../lib/logger';
import config from '../config';

// Use bluebird promises
Mongoose.Promise = Promise;

Mongoose.connect(config.mongodbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
const { connection } = Mongoose;

connection.on('error', error => {
    logger.error(error, 'MongoDB connection error');
});

connection.once('open', () => {
    logger.info(`Successfully connected to MongoDB at ${config.mongodbUri}`);
});

export default connection;

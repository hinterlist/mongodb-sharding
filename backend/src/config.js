import dotenv from 'dotenv';

dotenv.config();

export default {
    mongodbUri: process.env.MONGODB_URI,
};

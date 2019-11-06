import Mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    country: {
        type: String,
        enum: ['LV', 'EE', 'US'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const UserModel = Mongoose.model('user', UserSchema);

export { UserSchema, UserModel };

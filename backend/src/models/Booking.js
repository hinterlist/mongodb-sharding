import Mongoose, { Schema } from 'mongoose';

const BookingSchema = new Schema({
    user: {
        type: Mongoose.Types.ObjectId,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const BookingModel = Mongoose.model('booking', BookingSchema);

export { BookingSchema, BookingModel };

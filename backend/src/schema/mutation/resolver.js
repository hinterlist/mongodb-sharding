import { omit } from 'lodash';

export const Mutation = {
    /**
     * Create a new booking
     */
    addBooking: async (root, args, context) => {
        const { UserModel, BookingModel } = context;

        // Get user with specified ID
        const user = await UserModel.findById(args.input.user);
        if (!user) {
            throw new Error('User with specified ID does not exists');
        }

        const booking = new BookingModel({
            user: user.id,
            price: args.input.price,
        });

        await booking.save();

        return { booking };
    },

    /**
     * Update booking with specified ID
     */
    updateBooking: async (root, args, context) => {
        const { BookingModel, UserModel } = context;

        const booking = await BookingModel.findById(args.input.id);
        if (!booking) {
            throw new Error('Booking with specified ID does not exists');
        }

        // Get user with specified ID
        if (args.input.user) {
            const user = await UserModel.findById(args.input.user);
            if (!user) {
                throw new Error('User with specified ID does not exists');
            }

            booking.user = user.id;
        }

        Object.assign(booking, omit(args.input, ['user']));

        await booking.save();

        return { booking };
    },

    /**
     * Remove booking identified by ID
     */
    removeBooking: async (root, args, context) => {
        const { BookingModel } = context;

        const booking = await BookingModel.findById(args.input.id);
        if (!booking) {
            throw new Error('Booking with specified ID does not exists');
        }

        await booking.remove();

        return { id: booking.id };
    },

    /**
     * Crate a new user
     */
    addUser: async (root, args, context) => {
        const { UserModel } = context;

        const user = new UserModel(args.input);
        await user.save();

        return { user };
    },

    /**
     * Update existing user identified by ID
     *
     * NOTE: Because imutable nature of user we need to recreate it,
     * each time we are trying to change country. But for simplicity I'll
     * be re-creating it each time.
     *
     * In production we ofcourse should use transactions for that purpose
     */
    updateUser: async (root, args, context) => {
        const { UserModel } = context;

        const user = await UserModel.findById(args.input.id);
        if (!user) {
            throw new Error('User with specified ID does not exists');
        }

        const oldUser = user.toObject();
        const newUser = Object.assign({}, oldUser, args.input);

        await user.remove();

        try {
            const _user = await new UserModel(newUser).save();
            return { user: _user };
        } catch (e) {
            // Restore old user if something went wrong
            await new UserModel(oldUser).save();
            throw e;
        }
    },

    /**
     * Remove user identified by ID
     */
    removeUser: async (root, args, context) => {
        const { UserModel } = context;

        const user = await UserModel.findById(args.input.id);
        if (!user) {
            throw new Error('User with specified ID does not exists');
        }

        await user.remove();

        return { id: user.id };
    },
};

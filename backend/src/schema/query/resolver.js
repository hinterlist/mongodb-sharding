export const Query = {
    /**
     * Return list of users available in the system
     */
    users: (root, args, context) => {
        const { UserModel } = context;

        const query = {};

        // Filte results by country
        if (args.country) {
            query.country = args.country;
        }

        // Try to match users by specified string
        if (args.search) {
            query.$or = [
                {
                    firstName: {
                        $regex: args.search,
                        $options: 'i',
                    },
                },
                {
                    lastName: {
                        $regex: args.search,
                        $options: 'i',
                    },
                },
                {
                    email: {
                        $regex: args.search,
                        $options: 'i',
                    },
                },
            ];
        }

        return UserModel.find(query);
    },

    /**
     * Return list of available bookings
     */
    bookings: (root, args, context) => {
        const { BookingModel } = context;
        return BookingModel.find();
    },
};

export const Booking = {
    /**
     * Resolve user field to User entity
     */
    user: (root, args, context) => {
        const { UserModel } = context;
        return UserModel.findById(root.user);
    },
};

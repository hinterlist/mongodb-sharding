import React, { useState } from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';

import BookingForm from './BookingForm';
import { useMutation } from '@apollo/react-hooks';
import { ADD_BOOKING_MUTATION } from '../../../graphql/Mutation';
import { BOOKINGS_LIST_QUERY } from '../../../graphql/Query';

const AddBookingModal = ({ trigger }) => {
    const initialValues = {
        price: '',
        user: '',
    };

    const [visible, setVisible] = useState(false);
    const [addBooking] = useMutation(ADD_BOOKING_MUTATION, {
        update(
            cache,
            {
                data: { addBooking },
            },
        ) {
            const { bookings } = cache.readQuery({
                query: BOOKINGS_LIST_QUERY,
            });
            cache.writeQuery({
                query: BOOKINGS_LIST_QUERY,
                data: { bookings: bookings.concat([addBooking.booking]) },
            });
        },
    });

    const onSubmit = values => {
        addBooking({
            variables: {
                input: {
                    ...values,
                    price: parseFloat(values.price),
                },
            },
        });

        setVisible(false);
    };

    const onOpen = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const _trigger = React.cloneElement(trigger, { onClick: onOpen });

    return (
        <Modal
            trigger={_trigger}
            open={visible}
            onClose={onClose}
            size="small"
            closeIcon
        >
            <Modal.Header>Add a new booking</Modal.Header>
            <Modal.Content>
                <BookingForm
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                />
            </Modal.Content>
        </Modal>
    );
};

export default AddBookingModal;

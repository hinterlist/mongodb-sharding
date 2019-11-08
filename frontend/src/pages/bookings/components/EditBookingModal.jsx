import React, { useState } from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';
import { omit } from 'lodash';

import BookingForm from './BookingForm';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_BOOKING_MUTATION } from '../../../graphql/Mutation';

const EditBookingModal = ({ trigger, booking }) => {
    const initialValues = {
        user: booking.user.id,
        price: booking.price,
    };

    const [visible, setVisible] = useState(false);
    const [updateBooking] = useMutation(UPDATE_BOOKING_MUTATION);

    const onSubmit = values => {
        updateBooking({
            variables: {
                input: {
                    id: booking.id,
                    user: values.user,
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
            <Modal.Header>Edit booking</Modal.Header>
            <Modal.Content>
                <BookingForm
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                />
            </Modal.Content>
        </Modal>
    );
};

export default EditBookingModal;

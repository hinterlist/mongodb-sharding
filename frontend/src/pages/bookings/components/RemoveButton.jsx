import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_BOOKING_MUTATION } from '../../../graphql/Mutation';
import { BOOKINGS_LIST_QUERY } from '../../../graphql/Query';

const RemoveButton = ({ id }) => {
    const [removeBooking] = useMutation(REMOVE_BOOKING_MUTATION, {
        update(
            cache,
            {
                data: { removeBooking },
            },
        ) {
            const { bookings } = cache.readQuery({
                query: BOOKINGS_LIST_QUERY,
            });
            cache.writeQuery({
                query: BOOKINGS_LIST_QUERY,
                data: {
                    bookings: bookings.filter(
                        booking => booking.id !== removeBooking.id,
                    ),
                },
            });
        },
    });

    const onClick = () => {
        removeBooking({ variables: { input: { id } } });
    };

    return (
        <Button onClick={onClick} size="small" icon negative>
            <Icon name="remove" />
        </Button>
    );
};

export default RemoveButton;

import React from 'react';
import { Loader, Message, MessageContent, Table } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';
import { isEmpty, get } from 'lodash';

import BookingItem from './BookingItem';
import { BOOKINGS_LIST_QUERY } from '../../../graphql/Query';

const BookingsList = ({ search, country }) => {
    const { loading, data } = useQuery(BOOKINGS_LIST_QUERY, {
        variables: { search, country },
    });

    if (loading) {
        return <Loader />;
    }

    const bookings = get(data, 'bookings', null);
    if (!loading && isEmpty(bookings)) {
        return (
            <Message>
                <MessageContent>List of bookings is empty</MessageContent>
            </Message>
        );
    }

    return (
        <Table>
            <Table.Header>
                <Table.HeaderCell>E-mail</Table.HeaderCell>
                <Table.HeaderCell>Fist Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Country</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell />
            </Table.Header>
            <Table.Body>
                {bookings.map((booking, idx) => (
                    <BookingItem key={idx} booking={booking} />
                ))}
            </Table.Body>
        </Table>
    );
};

export default BookingsList;

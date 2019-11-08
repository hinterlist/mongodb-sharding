import React from 'react';
import { Table } from 'semantic-ui-react';
import RemoveButton from './RemoveButton';
import EditButton from './EditButton';
import EditBookingModal from './EditBookingModal';

const UserItem = ({ booking }) => (
    <Table.Row>
        <Table.Cell>{booking.user.email}</Table.Cell>
        <Table.Cell>{booking.user.firstName}</Table.Cell>
        <Table.Cell>{booking.user.lastName}</Table.Cell>
        <Table.Cell>{booking.user.country}</Table.Cell>
        <Table.Cell>{booking.price}</Table.Cell>
        <Table.Cell textAlign="right">
            <EditBookingModal trigger={<EditButton />} booking={booking} />
            <RemoveButton id={booking.id} />
        </Table.Cell>
    </Table.Row>
);

export default UserItem;

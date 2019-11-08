import React from 'react';
import { Table } from 'semantic-ui-react';
import RemoveButton from './RemoveButton';
import EditButton from './EditButton';
import EditUserModal from './EditUserModal';

const UserItem = ({ user }) => (
    <Table.Row>
        <Table.Cell>{user.firstName}</Table.Cell>
        <Table.Cell>{user.lastName}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>{user.country}</Table.Cell>
        <Table.Cell textAlign="right">
            <EditUserModal trigger={<EditButton />} user={user} />
            <RemoveButton id={user.id} />
        </Table.Cell>
    </Table.Row>
);

export default UserItem;

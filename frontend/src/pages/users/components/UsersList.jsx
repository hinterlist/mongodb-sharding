import React from 'react';
import { Loader, Message, MessageContent, Table } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';
import { isEmpty, get } from 'lodash';

import UserItem from './UserItem';
import { USERS_LIST_QUERY } from '../../../graphql/Query';

const UsersList = ({ search, country }) => {
    const { loading, data } = useQuery(USERS_LIST_QUERY, {
        variables: { search, country },
    });

    if (loading) {
        return <Loader />;
    }

    const users = get(data, 'users', null);
    if (!loading && isEmpty(users)) {
        return (
            <Message>
                <MessageContent>List of users is empty</MessageContent>
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
                <Table.HeaderCell />
            </Table.Header>
            <Table.Body>
                {users.map((user, idx) => (
                    <UserItem key={idx} user={user} />
                ))}
            </Table.Body>
        </Table>
    );
};

export default UsersList;

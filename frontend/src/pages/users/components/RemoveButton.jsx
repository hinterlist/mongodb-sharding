import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_USER_MUTATION } from '../../../graphql/Mutation';
import { USERS_LIST_QUERY } from '../../../graphql/Query';

const RemoveButton = ({ id }) => {
    const [removeUser] = useMutation(REMOVE_USER_MUTATION, {
        update(
            cache,
            {
                data: { removeUser },
            },
        ) {
            const { users } = cache.readQuery({ query: USERS_LIST_QUERY });
            cache.writeQuery({
                query: USERS_LIST_QUERY,
                data: {
                    users: users.filter(user => user.id !== removeUser.id),
                },
            });
        },
    });

    const onClick = () => {
        removeUser({ variables: { input: { id } } });
    };

    return (
        <Button onClick={onClick} size="small" icon negative>
            <Icon name="remove" />
        </Button>
    );
};

export default RemoveButton;

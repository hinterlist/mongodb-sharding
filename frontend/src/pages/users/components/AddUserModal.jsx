import React, { useState } from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';

import UserForm from './UserForm';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER_MUTATION } from '../../../graphql/Mutation';
import { USERS_LIST_QUERY } from '../../../graphql/Query';

const AddUserModal = ({ trigger }) => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
    };

    const [visible, setVisible] = useState(false);
    const [addUser] = useMutation(ADD_USER_MUTATION, {
        update(
            cache,
            {
                data: { addUser },
            },
        ) {
            const { users } = cache.readQuery({ query: USERS_LIST_QUERY });
            cache.writeQuery({
                query: USERS_LIST_QUERY,
                data: { users: users.concat([addUser.user]) },
            });
        },
    });

    const onSubmit = values => {
        addUser({ variables: { input: values } });
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
            <Modal.Header>Add a new user</Modal.Header>
            <Modal.Content>
                <UserForm initialValues={initialValues} onSubmit={onSubmit} />
            </Modal.Content>
        </Modal>
    );
};

export default AddUserModal;

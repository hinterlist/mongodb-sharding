import React, { useState } from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';
import { omit } from 'lodash';

import UserForm from './UserForm';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER_MUTATION } from '../../../graphql/Mutation';

const EditUserModal = ({ trigger, user }) => {
    const initialValues = { ...omit(user, ['id', '__typename']) };

    const [visible, setVisible] = useState(false);
    const [updateUser] = useMutation(UPDATE_USER_MUTATION);

    const onSubmit = values => {
        updateUser({
            variables: {
                input: {
                    id: user.id,
                    ...values,
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
            <Modal.Header>Edit user</Modal.Header>
            <Modal.Content>
                <UserForm initialValues={initialValues} onSubmit={onSubmit} />
            </Modal.Content>
        </Modal>
    );
};

export default EditUserModal;

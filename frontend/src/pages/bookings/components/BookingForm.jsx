import React from 'react';
import { some } from 'lodash';
import { useFormik } from 'formik';
import { Form, Select, Button, Icon } from 'semantic-ui-react';

import UserSelect from './UserSelect';

const validate = values => {
    const errors = {};
    if (!values.user) {
        errors.user = 'Required';
    }

    if (!values.price) {
        errors.price = 'Required';
    } else if (!/^\d+$/i.test(values.price)) {
        errors.price = 'Invalid price';
    }

    return errors;
};

const UserForm = ({ onSubmit, initialValues }) => {
    const formik = useFormik({ onSubmit, initialValues, validate });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
                <label>User</label>
                <UserSelect
                    name="user"
                    value={formik.values.user}
                    onChange={formik.handleChange}
                    error={
                        formik.errors.user
                            ? { content: 'Please select user' }
                            : undefined
                    }
                />
            </Form.Field>
            <Form.Field>
                <label>Price</label>
                <Form.Input
                    placeholder="Price"
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={
                        formik.errors.price
                            ? { content: 'Please enter price' }
                            : undefined
                    }
                />
            </Form.Field>

            <Button color="green" type="submit" onClick={formik.handleSubmit}>
                <Icon name="checkmark" />
                Save
            </Button>
        </Form>
    );
};

export default UserForm;

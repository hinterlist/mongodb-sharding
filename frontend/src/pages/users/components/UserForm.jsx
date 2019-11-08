import React from 'react';
import { some } from 'lodash';
import { useFormik } from 'formik';
import { Form, Select, Button, Icon } from 'semantic-ui-react';

const COUNTRIES = [
    { key: 'LV', value: 'LV', text: 'Latvia' },
    { key: 'EE', value: 'EE', text: 'Estonia' },
    { key: 'US', value: 'US', text: 'United States' },
];

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (!values.country) {
        errors.country = 'Required';
    } else if (!some(COUNTRIES, country => country.value === values.country)) {
        errors.country = 'Invalid country';
    }

    return errors;
};

const UserForm = ({ onSubmit, initialValues }) => {
    const formik = useFormik({ onSubmit, initialValues, validate });
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
                <label>First Name</label>
                <Form.Input
                    placeholder="First Name"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                        formik.errors.firstName
                            ? { content: 'Please enter your firstname' }
                            : undefined
                    }
                />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <Form.Input
                    placeholder="Last Name"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                        formik.errors.lastName
                            ? { content: 'Please enter your lastname' }
                            : undefined
                    }
                />
            </Form.Field>
            <Form.Field>
                <label>E-mail</label>
                <Form.Input
                    placeholder="E-mail"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={
                        formik.errors.email
                            ? { content: 'Please enter your e-mail' }
                            : undefined
                    }
                />
            </Form.Field>
            <Form.Field>
                <label>Country</label>
                <Form.Select
                    placeholder="Select your country"
                    name="country"
                    options={COUNTRIES}
                    value={formik.values.country}
                    onChange={(e, { value }) => {
                        formik.handleChange({
                            target: { name: 'country', value },
                        });
                    }}
                    error={
                        formik.errors.country
                            ? { content: 'Please enter your country' }
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

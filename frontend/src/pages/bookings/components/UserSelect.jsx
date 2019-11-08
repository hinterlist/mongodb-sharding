import React from 'react';
import { Form } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';

import { USERS_LIST_QUERY } from '../../../graphql/Query';

const CountrySelect = ({ name, value, onChange, error }) => {
    const { loading, data } = useQuery(USERS_LIST_QUERY);

    return (
        <Form.Select
            placeholder="Select user"
            name={name}
            value={value}
            loading={loading}
            options={
                data
                    ? data.users.map(user => ({
                          key: user.id,
                          value: user.id,
                          text: `${user.firstName} ${user.lastName}`,
                          description: user.country,
                      }))
                    : []
            }
            onChange={(e, { value }) => {
                onChange({
                    target: { name, value },
                });
            }}
            error={error}
        />
    );
};

export default CountrySelect;

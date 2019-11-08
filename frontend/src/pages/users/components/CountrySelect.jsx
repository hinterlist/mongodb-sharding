import React from 'react';
import { Select } from 'semantic-ui-react';

const COUNTRIES = [
    { key: 'LV', value: null, text: 'All' },
    { key: 'LV', value: 'LV', text: 'Latvia' },
    { key: 'EE', value: 'EE', text: 'Estonia' },
    { key: 'US', value: 'US', text: 'United States' },
];

const CountrySelect = ({ onChange }) => (
    <Select
        placeholder="Select your country"
        name="country"
        options={COUNTRIES}
        onChange={(e, { value }) => {
            onChange(value);
        }}
    />
);

export default CountrySelect;

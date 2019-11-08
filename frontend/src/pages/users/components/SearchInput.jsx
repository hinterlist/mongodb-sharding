import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchInput = ({ onChange }) => (
    <Input
        onChange={e => onChange(e.target.value)}
        placeholder="Search..."
        fluid
    />
);

export default SearchInput;

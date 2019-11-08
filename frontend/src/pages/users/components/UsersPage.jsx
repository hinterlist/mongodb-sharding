import React, { useState } from 'react';
import { Container, Menu } from 'semantic-ui-react';

import UsersList from './UsersList';
import AddButton from './AddButton';
import SearchInput from './SearchInput';
import AddUserModal from './AddUserModal';
import CountrySelect from './CountrySelect';

const UsersPage = () => {
    const [search, setSearch] = useState();
    const [country, setCountry] = useState();

    return (
        <Container>
            <Menu secondary>
                <Menu.Item fitted style={{ flex: 2 }}>
                    <SearchInput onChange={setSearch} />
                </Menu.Item>
                <Menu.Item fitted style={{ flex: 2 }}>
                    <CountrySelect onChange={setCountry} />
                </Menu.Item>
                <Menu.Item fitted tyle={{ flex: 1 }}>
                    <AddUserModal trigger={<AddButton />} />
                </Menu.Item>
            </Menu>
            <UsersList search={search} country={country} />
        </Container>
    );
};

export default UsersPage;

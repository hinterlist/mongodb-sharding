import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

import { MenuLink } from '../../common';

const Navigation = () => (
    <Menu fixed="top" inverted>
        <Container>
            <Menu.Item header>CRM</Menu.Item>
            <MenuLink to="/bookings">Bookings</MenuLink>
            <MenuLink to="/users">Users</MenuLink>
        </Container>
    </Menu>
);

export default Navigation;

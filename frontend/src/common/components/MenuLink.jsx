import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

const MenuLink = ({ children, to, activeOnlyWhenExact }) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    });

    return (
        <Link to={to}>
            <Menu.Item active={match}>{children}</Menu.Item>
        </Link>
    );
};

export default MenuLink;

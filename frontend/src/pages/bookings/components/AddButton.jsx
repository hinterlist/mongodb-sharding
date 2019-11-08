import React from 'react';

import { Button, Icon } from 'semantic-ui-react';

const AddButton = ({ onClick }) => (
    <Button onClick={onClick} labelPosition="left" icon primary>
        <Icon name="add" />
        Add Booking
    </Button>
);

export default AddButton;

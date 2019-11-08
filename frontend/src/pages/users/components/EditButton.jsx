import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const EditButton = ({ onClick }) => (
    <Button onClick={onClick} size="small" color="green" icon>
        <Icon name="edit" />
    </Button>
);

export default EditButton;

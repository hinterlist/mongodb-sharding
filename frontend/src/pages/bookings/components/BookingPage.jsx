import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

import BookingsList from './BookingsList';
import AddBookingModal from './AddBookingModal';
import AddButton from './AddButton';

const BookingPage = () => (
    <Container>
        <Menu secondary>
            <Menu.Item fitted tyle={{ flex: 1 }}>
                <AddBookingModal trigger={<AddButton />} />
            </Menu.Item>
        </Menu>
        <BookingsList />
    </Container>
);

export default BookingPage;

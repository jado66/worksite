import React from 'react';
import AppBase from '../../components/utils/AppBase';
import ProtectedPage from '../../components/utils/ProtectedPage';

import Subscribe from '../../components/mail/Subscribe';
import Ping from '../../components/mail/Ping';
import Container from '../../components/utils/Container';

export default function Mail() {    
    return (
        <ProtectedPage >
            <Container noFooter>
                <h1 className="h3 text-center mt-4">Your Mailbox</h1>
                <Ping/>
                <Subscribe/>
            </Container>
        </ProtectedPage>
    );
}
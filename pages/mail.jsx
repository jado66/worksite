import React from 'react';
import AppBase from '../components/utils/AppBase';
import ProtectedPage from '../components/utils/ProtectedPage';

import Subscribe from '../components/mail/Subscribe';
import Ping from '../components/mail/Ping';

export default function Mail() {
      
    
    return (
        <ProtectedPage>
            {/* <AppBase> */}
                <h1>Your Mailbox</h1>

                {/* <button onClick={pingAPI}>Ping API</button> */}
                <Ping/>
                <Subscribe/>
            {/* </AppBase> */}
        </ProtectedPage>
    );
}
import React from 'react';
import { ChaynsProvider } from 'chayns-api';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';

// @ts-expect-error chayns-js api has no types
// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
chayns.ready
    .then(() => {
        try {
            createRoot(document.querySelector('#root') as Element).render(
                <ChaynsProvider>
                    <App />
                </ChaynsProvider>
            );
        } catch (e) {
            console.error('Encountered error at `ReactDOM.render`: ', e);
        }
    })
    .catch((error: Error) => {
        console.warn('No chayns environment found.', error);
    });

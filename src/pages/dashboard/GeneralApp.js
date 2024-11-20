import React, { Suspense, lazy } from 'react';
import Chats from './Chats';

//Dynamic import
// const Cat = lazy(() => import('../../components/Cat'));

const GeneralApp = () => {
  return (
    <>
      {/* <Suspense fallback="Loading...">
        <Cat />
      </Suspense> */}
      {/* Chat Component */}
      <Chats />
    </>
  );
};

export default GeneralApp;

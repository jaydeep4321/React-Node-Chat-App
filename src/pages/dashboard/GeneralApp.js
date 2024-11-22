import React, { Suspense, lazy } from 'react';
import Chats from './Chats';
import { Box, Stack } from '@mui/material';
import Conversation from '../../components/conversation';

//Dynamic import
// const Cat = lazy(() => import('../../components/Cat'));

const GeneralApp = () => {
  return (
    <>
      {/* <Suspense fallback="Loading...">
        <Cat />
      </Suspense> */}
      {/* Chat Component */}
      <Stack direction={'row'} sx={{ width: '100%' }}>
        <Chats />
        {/* Conversation */}
        <Box
          sx={{
            height: '100%',
            width: 'calc(100vw - 420px)',
            backgroundColor: '#fff',
          }}
        >
          <Conversation />
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;

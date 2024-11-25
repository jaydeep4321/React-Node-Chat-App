import React, { Suspense, lazy } from 'react';
import Chats from './Chats';
import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Conversation from '../../components/conversation';

//Dynamic import
// const Cat = lazy(() => import('../../components/Cat'));

const GeneralApp = () => {
  const theme = useTheme();
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
            backgroundColor:
              theme.palette.mode === 'light'
                ? '#fff'
                : theme.palette.background.default,
          }}
        >
          <Conversation />
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;

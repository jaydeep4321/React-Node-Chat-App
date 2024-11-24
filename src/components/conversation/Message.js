import { Box, Stack } from '@mui/material';
import React from 'react';
import { Chat_History } from '../../data';
import { Timeline } from './MsgTypes';

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case 'divider':
              // Timeline
              return <Timeline el={el} />;
              break;
            case 'msg':
              switch (el.subtype) {
                case 'img':
                  break;
                case 'doc':
                  break;
                case 'link':
                  break;
                case 'reply':
                  break;

                default:
                  break;
              }
              break;

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;

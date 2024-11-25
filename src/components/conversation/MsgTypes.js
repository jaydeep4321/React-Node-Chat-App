import { Divider, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const Timeline = (el) => {
  const theme = useTheme();
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {el.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

export { Timeline };

import { Box, Typography } from '@material-ui/core';
import React from 'react';

import { ErrorStyles } from './styles';

export default function Error() {
  const classes = ErrorStyles();

  return (
    <Box>
      <Typography className={classes.text}>
        Oops, something went wrong!
      </Typography>
    </Box>
  );
}

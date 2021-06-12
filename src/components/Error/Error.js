import { Box, Typography } from '@material-ui/core';
import React from 'react';

import { ErrorStyles } from './styles';

const Error = () => {
  const classes = ErrorStyles();

  return (
    <Box>
      <Typography className={classes.text}>
        Oops, something went wrong!
      </Typography>
    </Box>
  );
};

export default Error;

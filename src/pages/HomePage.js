import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import { HomePageStyles } from './pagesStyles/pageStyles';
import GitHubIcon from '@material-ui/icons/GitHub';

const HomePage = () => {
  const classes = HomePageStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.title}>
        Добро пожаловать в приложение: "Записная книжка"!
      </Typography>

      <Link
        href="https://github.com/OleksandrPenskyi"
        target="_blank"
        className={classes.link}
      >
        <GitHubIcon />
        <Typography className={classes.text}>Penskyi Oleksandr</Typography>
      </Link>
    </Box>
  );
};

export default HomePage;

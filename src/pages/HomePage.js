import React, { useEffect } from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import { HomePageStyles } from './pagesStyles/pageStyles';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useHistory } from 'react-router-dom';
import { homeLink } from '../routes';

export default function HomePage() {
  const classes = HomePageStyles();
  const history = useHistory();

  useEffect(() => {
    history.push(homeLink);
  }, [history]);

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
}

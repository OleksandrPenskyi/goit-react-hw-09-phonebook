/* eslint-disable import/no-anonymous-default-export */
import { makeStyles } from '@material-ui/core';

export const HomePageStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
  },

  title: {
    fontSize: 42,
    fontWeight: 700,
    textAlign: 'center',
  },

  link: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: '10px',
    right: '40px',
    fontSize: 20,
    textAlign: 'right',
    cursor: 'pointer',
    color: '#000',
    fontWeight: 700,
  },
  text: {
    fontSize: 18,
    color: '#000',
    fontWeight: 700,
    marginLeft: '5px',
  },
});

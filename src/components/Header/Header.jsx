import React, { useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tab from '../Tabs/CustomTab';

const useStyles = makeStyles((theme) => ({
  media: {

    height: 100,
  },
  header: {
    backgroundColor: 'transparent',
    color: 'black',
    boxShadow: '0px 0px 0px 0px',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  useEffect(() => {
    fetch('http://localhost:8000/books')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // eslint-disable-next-line no-undef
        setStatus(data);
      });
  }, []);
  return (
    <Container maxWidth="md" className="test">
      <h1>React Assignment-2</h1>
      <Typography gutterBottom className={classes.title} variant="h4" component="h2" noWrap>
        My Library
      </Typography>
      <Tab />
    </Container>
  );
}

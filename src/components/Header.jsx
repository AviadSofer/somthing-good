import React from 'react'
import { makeStyles } from '@material-ui/core'
import NavBar from './NavBar';
import HeaderTitle from './HeaderTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center', // ציר X
        alignItems: 'center', // ציר Y
        position: 'sticky',
        top: 0,
        color: '#fff',
        fontFamily: 'Secular One, sans-serif',
        [theme.breakpoints.down('sm')]: {
            position: 'static',
        },
    },
}))

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root} id="header">
            <NavBar />
            <HeaderTitle />
        </div>
    )
}

export default Header;

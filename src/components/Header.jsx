import React from 'react'
import { makeStyles } from '@material-ui/core'
import NavBar from './NavBar';
import HeaderText from './HeaderText';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'sticky',
        top: 0,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center', // ציר X
        alignItems: 'center', // ציר Y
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
            <HeaderText />
        </div>
    )
}

export default Header

// <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt={'logo'} className={classes.appbarTitle}></img>
// <h1 className={classes.appbarTitle}>האי <span className={classes.colorText}>שלי</span></h1>
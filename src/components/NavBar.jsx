import React, { useState } from 'react'
import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core'
import { Link as Scroll } from 'react-scroll'
import navButtons from '../static/navButtons'

const useStyles = makeStyles((theme) => ({
    appBarTransparent: {
        background: 'none', // אם יש רקע, מוחק אותו
     },
     appBarSolid: {
        backgroundColor: '#fff',
        color: '#eee',
        borderBottom: '1px solid',

     },
     appbarWrapper: {
         width: "85%", // יחסית לאלמנט ההורה (שמעליו)
         margin: '0 auto', // תחתונים ועליונים אפס, ממרכז אופקית
     },
     appbarTitle: {
         color: '#ffaaaa',
         flexGrow: '1', // מכיוון שהוא אחד, והשני לא מוגדר, כלומר אפס, הוא יתפוס את כל המרחב הפנוי
         [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        }
     },
     redText: {
         color:'#ffaaaa'
     },
     colorText: {
         color: '#5AFF3D'
     },
     navButtonWhite: {
        color: '#fff',
        background: 'none',
        fontFamily: 'Secular One, sans-serif',
        fontSize: '1.2rem',
        margin: '7px',
        [theme.breakpoints.down('sm')]: {
            margin: '0',
            fontSize: '1rem',
        }
     },
     navButtonBlack: {
         color: '#aaa',
         background: 'none',
         fontFamily: 'Secular One, sans-serif',
         fontSize: '1.2rem',
         margin: '7px',
         [theme.breakpoints.down('sm')]: {
             margin: '0',
            fontSize: '1rem',
         }
     },
}))

function NavBar() {
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('appBarTransparent');
    const [navButton, setNavButton] = useState('navButtonWhite');
    function changeBackground() {
            const offetSetHeight = window.document.getElementById('explain').offsetHeight;
            if (window.pageYOffset > offetSetHeight) {
                setNavBackground('appBarSolid')
                setNavButton('navButtonBlack')
            } else {
                setNavBackground('appBarTransparent')
                setNavButton('navButtonWhite')
            }
        }
    window.addEventListener('scroll', changeBackground)
    return (
        <div>
            <AppBar className={classes[navBackground]} elevation={0}> {/*אלווישן=גובה*/}
                <Toolbar className={classes.appbarWrapper}> {/*סוג של פלקס*/}
                <h1 className={classes.appbarTitle}>
                    <span className={classes.redText}>משהו </span><span className={classes.colorText}>טוב</span>
                </h1>
                <Scroll to={navButtons[0].to} smooth={true}>
                <Button className={classes[navButton]}>{navButtons[0].title}</Button>
                </Scroll>
                <Scroll to={navButtons[1].to} smooth={true}>
                <Button className={classes[navButton]}>{navButtons[1].title}</Button>
                </Scroll>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;

import React, { useEffect, useState } from 'react'
import { Collapse, IconButton, makeStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto', // תחתונים ועליונים אפס, ממרכז אופקית
        width: "50%",
        textAlign: 'center', // יישור טקסט
        [theme.breakpoints.down('sm')]: {
            width: '85%',
        },
    },
    title: {
        fontSize: '4rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '25vh',
            fontSize: '3rem',
        },
    },
    colorText: {
        color: '#5AFF3D'
    },
    paragraph: {
        fontSize: '2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.6rem',
        },
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '3.6rem'
    },
}))

function HeaderText() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true) // ציקד הופך לטרו ברינדור הראשון של הדף
    }, [])
    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}> {/*אנימציה*/}
        <div className={classes.root}>
            <h1 className={classes.title}>
                משהו <span className={classes.colorText}>טוב</span>
            </h1>
            <h2 className={classes.paragraph}>
            כותבים משהו טוב, קטן או גדול, שקרה או שיש, מקבלים אותו מעוצב ומעלים לרשתות החברתיות עם התיוג 
            <br/>
            #משהוקטןוטוב
            </h2>
            <Scroll to={'place-to-visit'} smooth={true}> {/*גלילה כשהחץ נלחץ*/}
            <IconButton>
                <ExpandMoreIcon className={classes.goDown}/>
            </IconButton>
            </Scroll>
        </div>
        </Collapse>
    )
}

export default HeaderText; 
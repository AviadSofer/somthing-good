import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        width: '82%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '0 auto',
        backgroundColor: '#fff',
        boxShadow: '0 0px 40px rgba(0, 0, 0, 0.2)',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    paragraph: {
        fontFamily: 'Secular One, sans-serif',
        fontSize: '1.5rem',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.3rem',
        },
    }
}))

function Explain() {
    const classes = useStyles();
    return (
        <div className={classes.root} id={'explain'}>
            <p className={classes.paragraph}>
            בבוקר חביב של יום חם <br/>
            החלטתי להתעדכן בנעשה בעולם<br/>
            אז פתחתי חדשות כשבידי משקה קר<br/>
            וגיליתי שכולם מספרים אותו דבר<br/>
            שאני עומד למות או לפחות להדבק<br/>
            לפשוט את הרגל ומהבית להזרק<br/>
            אין עבודה והארנק ריק<br/>
            בקיצור הכל פה עומד להתפרק<br/>
            ובסוף המשדר- "והרי התחזית":<br/>
            שבוע שחור וקודר כל הארץ חזית<br/>
            נבהלתי מאוד ויצאתי בריצה<br/>
            "איזה יום יפה" אמר לי מישהו בקריצה<br/>
            הרמתי את הראש הסתכלתי מסביב<br/>
            והאמת שראיתי עולם דיי חביב<br/>
            זה לא רק שלא היה שחור וקודר<br/>
            הרגשתי באוויר משהו אחר
            </p>
        </div>
    )
}

export default Explain;

import React from 'react'
import { makeStyles } from '@material-ui/core'
import ImageCard from './ImageCard';
import places from '../static/places'
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh', // הגובה המינימלי הוא כזה, אם צריך יותר אז יותר
        display: 'flex',
        justifyContent: 'center', // ציר X
        alignItems: 'center', // ציר Y
        [theme.breakpoints.down('sm')]: { // מטריאל יואי מספקת נקודות עצירה. כשהוא רחב פחות מ960
            flexDirection: 'column',
        },
    }
}))

function PlaceTovisit() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    // פונקציה שמקבלת את המקום שממנו האנימציה צריכה להתחיל ומחזירה טרו כשהוא מגיע
    return (
        <div className={classes.root} id={'place-to-visit'}>
            <ImageCard place={places[0]} checked={checked} />
            <ImageCard place={places[1]}  checked={checked} />
        </div>
    )
}

export default PlaceTovisit

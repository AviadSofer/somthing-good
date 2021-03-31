import React, { useState } from 'react'
import { Button, makeStyles, TextareaAutosize } from '@material-ui/core'
import textToImage from '../hook/textToImage'
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center', // ציר X
        alignItems: 'flex-start',
        fontFamily: 'Secular One, sans-serif',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    input: {
        width: 500,
        margin: '17px',
        marginTop: '10vh',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            margin: '15px',
        },
    },
    textarea: {
        width: 500,
        fontSize: '1rem',
        fontFamily: 'Secular One, sans-serif',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    output: {
        width: 500,
        margin: '17px',
        marginTop: '10vh',
        [theme.breakpoints.down('sm')]: {
            width: '87%',
            margin: '5px',
        },
    },
    outputText: {
        minHeight: '20vh',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        fontSize: '1.1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '43%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    facebook: {
        backgroundColor: '#4267B2'
    },
    whatasapp: {
        backgroundColor: '#25D366'
    }
}))

function InputAndOutput() {
    const classes = useStyles();
    const [text, setText] = useState('');
    function changeHandler (e) {
        setText(e.target.value) 
    }
    function clickHandler() { 
        textToImage(text)
    }
    return (
        <div className={classes.root} id={'input-and-output'}>
            <div className={classes.input}>
                <h2>כאן כותבים, לא משנה האורך:</h2>
                <TextareaAutosize
                    rowsMin={8}
                    maxLength={250}
                    placeholder="לכאורה"
                    onChange={changeHandler}
                    className={classes.textarea}
                />
            </div>
            <div className={classes.output}>
                <h2>וזו התוצאה, למטה אפשר להוריד, לשתף, אפילו כדאי:</h2>
                <p id={'text'} className={classes.outputText}>{text}</p>
                <div className={classes.buttons}>
                <Button variant="contained" color="secondary" onClick={clickHandler}>
                    להורדה
                </Button>
                <FacebookShareButton url={`https://www.gstatic.com/webp/gallery3/1.sm.png`} openShareDialogOnClick={true}>
                    <Button className={classes.facebook} variant="contained">
                        <FacebookIcon size={"2rem"} round/>
                    </Button>
                </FacebookShareButton>
                <WhatsappShareButton>
                    <Button className={classes.whatasapp} variant="contained">
                        <WhatsappIcon size={"2rem"} round/>
                    </Button>
                </WhatsappShareButton>
                </div>
            </div>
        </div>
    )
}

export default InputAndOutput;
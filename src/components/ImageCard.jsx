import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {   
    maxWidth: 500, // 500px
    background: 'rgba(0,0,0,0.5)', // האחרון, אלפא, בין 0 (שקוף) לאחד (לא שקוף). השאר, בין 0 ל255
    margin: '15px',
    marginTop: '7vh',
  },
  media: {
    height: 300,
  },
  title: {
    fontFamily: 'Secular One, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#fff', // לבן
  },
  desc: {
    fontFamily: 'Secular One, sans-serif',
    fontSize: '1rem',
    color: '#ddd', // לבן פחות בהיר
  }
});

function ImageCard({ place, checked }) {
  const classes = useStyles();
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}> 
    {/*ציקד הופך לטרו כשמגיע המקום, והאנימציה מתחילה*/}
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
             {place.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
              {place.description}
            </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}

export default ImageCard
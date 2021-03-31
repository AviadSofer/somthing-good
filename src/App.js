import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Explain from "./components/Explain";
import Header from "./components/Header";
import InputAndOutput from "./components/InputAndOutput";

const useStyles = makeStyles({
  root: {
    backgroundAttachment: 'fixed', // parallax scrolling effect
    height: '115vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background.jpg)`,
    backgroundRepeat: "no-repeat", // התמונה לא תחזור על עצמה
    backgroundSize: "cover", // מכסה את כל הדף, גם אם יצטרך למתוח את השוליים או לקצץ
    direction: 'rtl',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline /> {/*מאפס את הסיסס כך שיהיה שווה בכל הדפדפנים*/}
      <Header />
      <Explain />
      <InputAndOutput />
    </div>
  );
}

export default App;

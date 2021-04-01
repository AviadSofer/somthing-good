import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Explain from "./components/Explain";
import Header from "./components/Header";
import InputAndOutput from "./components/InputAndOutput";

const useStyles = makeStyles({
  root: {
    direction: 'rtl',
    height: '115vh',
    backgroundAttachment: 'fixed', // parallax scrolling effect
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background.jpg)`,
    backgroundRepeat: "no-repeat", // התמונה לא תחזור על עצמה
    backgroundSize: "cover", // מכסה את כל הדף, גם אם יצטרך למתוח את השוליים או לקצץ
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Explain />
      <InputAndOutput />
    </div>
  );
}

export default App;

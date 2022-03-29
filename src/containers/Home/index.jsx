import { useStyles } from "../../components/Header/headerStyle";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.containImg}>
      <img
        className={classes.mainImage}
        src="https://bosta.co/wp-content/uploads/2019/09/bosta-banner.png"
        alt="mainImage"
      />
    </div>
  );
};

export default Home;

import image from "../assets/images/react2.jpg";
import classes from "../styles/Video.module.css";

const Video = () => {
  return (
    <a href="quiz.html">
      <div className={classes.video}>
        <img src={image} alt="Video Title" />
        <p>Uploading...</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
};

export default Video;

import { Link } from "react-router-dom";
import styles from "./DetailedResults.module.css";
import Bookmarked from "../bookmarked/Bookmakred";
import noImage from "../../images/no-image.png";
import filmIcon from "../../images/film-white.png";
import seriesIcon from "../../images/series-white.png";

function DetailedResults(props) {
  return (
    <Link
      to={`/search/${props.data.id}`}
      className={styles.ratedFilm}
      key={props.data.id}
      id={props.data.id}
    >
      <div
        className={styles.filmImg}
        style={
          props.data.primaryImage === null
            ? { backgroundImage: `url(${noImage})` }
            : {
                backgroundImage: `url(${props.data.primaryImage.url}`,
              }
        }
      >
        <Bookmarked data={props.data} />
      </div>

      <div className={styles.ratedContent}>
        <div>
          <div style={{ display: "inline-block" }}>
            <span>{props.data.releaseDate && props.data.releaseDate.day}</span>
            <span>
              /{props.data.releaseDate && props.data.releaseDate.month}
            </span>
            <span>
              /{props.data.releaseDate && props.data.releaseDate.year}
            </span>
          </div>
          <span className={styles.dot}>.</span>
          <div className={styles.generalDetails}>
            <span>
              <img
                className={styles.movieOrSerieIcon}
                src={
                  props.data.titleType.id === "movie" ? filmIcon : seriesIcon
                }
                alt=""
              />
            </span>
            <span>{props.data.titleType.text}</span>
          </div>
        </div>
        <div className={styles.title}>
          <h4>{props.data.titleText ? props.data.titleText.text : ""}</h4>
        </div>
      </div>
    </Link>
  );
}

export default DetailedResults;

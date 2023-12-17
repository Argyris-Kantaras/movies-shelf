import Bookmarked from "../bookmarked/Bookmakred";
import styles from "./ShowResults.module.css";
import filmIcon from "../../images/film-white.png";
import seriesIcon from "../../images/series-white.png";
import { Link } from "react-router-dom";

function ShowResults(props) {
  return (
    <Link
      className={styles.ratedFilm}
      key={props.data.id}
      id={props.data.id}
      to={`/search/${props.data.id}`}
    >
      <div
        className={styles.filmImg}
        style={{
          backgroundImage: `url(${
            props.data.primaryImage ? (
              props.data.primaryImage.url
            ) : (
              <h4>Image not available</h4>
            )
          })`,
        }}
      >
        <Bookmarked functional={false} data={props.data} />
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
          <h4>
            {props.data.originalTitleText
              ? props.data.originalTitleText.text
              : ""}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default ShowResults;

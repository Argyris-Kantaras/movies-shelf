import { useEffect, useState } from "react";
import styles from "./ShowDetails.module.css";
import axios from "axios";
import Bookmarked from "../bookmarked/Bookmakred";
import { useDispatch, useSelector } from "react-redux";

function ShowDetails(props) {
  const [details, setDetails] = useState({});
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  useEffect(() => {
    const getDetailsData = async () => {
      //Fetching data according to id
      const options = {
        method: "GET",
        url: `https://moviesdatabase.p.rapidapi.com/titles/${props.id}`,
        params: { info: "base_info" },
        headers: {
          "X-RapidAPI-Key":
            "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setDetails(response.data.results);
      } catch (error) {
        dispatch({ type: "error", error: error.response.data });
      }
    };
    getDetailsData();
  }, [props]);

  if (error !== "") {
    return (
      <div className={styles.errorContainer}>
        <h1>{error}</h1>
        <button
          className={styles.okBtn}
          onClick={() => dispatch({ type: "error", error: "" })}
        >
          OK
        </button>
      </div>
    );
  }
  return (
    <div className={styles.allDetails}>
      <div className={styles.imgContainer}>
        <img
          className={styles.mainImg}
          src={details.primaryImage ? details.primaryImage.url : null}
        />
        <caption className={styles.caption}>
          {details.primaryImage ? details.primaryImage.caption.plainText : null}
        </caption>
      </div>
      <div className={styles.infoContainer}>
        <Bookmarked functional={true} data={details} />
        <h1>
          {details.originalTitleText ? details.originalTitleText.text : ""}
        </h1>
        <div className={styles.genres}>
          {details.genres
            ? details.genres.genres.map((genre) => {
                return <span key={genre.text}>{genre.text}</span>;
              })
            : null}
        </div>
        <div>
          <h2 className={styles.rating}>
            {details.ratingsSummary
              ? details.ratingsSummary.aggregateRating
              : ""}
            /10
          </h2>
          <div className={styles.basedOnVotes}>
            Based on{" "}
            {details.ratingsSummary ? (
              <span className={styles.votes}>
                {details.ratingsSummary.voteCount}
              </span>
            ) : null}{" "}
            votes
          </div>
          <p className={styles.plot}>
            {details.plot ? details.plot.plotText.plainText : null}
          </p>
        </div>
        <div className={styles.realeaseDate}>
          <span>Realease Date:</span>
          <span>{details.releaseDate ? details.releaseDate.day : null}/</span>
          <span>{details.releaseDate ? details.releaseDate.month : null}/</span>
          <span>{details.releaseDate ? details.releaseDate.year : null}</span>
          <div>{}</div>
        </div>
      </div>
    </div>
  );
}
export default ShowDetails;

import styles from "./ComingSoon.module.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ShowResults from "../Show results/ShowResults";

function ComingSoon(props) {
  const [upcomingFilms, setUpcomingFilms] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getUpcomingMovies = async function () {
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
        params: { limit: "17", page: "1" },
        headers: {
          "X-RapidAPI-Key":
            "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);

        setUpcomingFilms(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    if (upcomingFilms.length === 0) getUpcomingMovies();
  }, [upcomingFilms]);

  const goBackHandler = () => {
    if (index > 0) setIndex(index - 1);
  };

  const goNextHandler = () => {
    if (index < 3) setIndex(index + 1);
  };

  return (
    <div className={styles.comingSoon}>
      <h2>Coming Soon</h2>
      <div className={styles.showComing}>
        <button onClick={goBackHandler} className={styles.moveBtn}>
          {"<"}
        </button>
        <div className={styles.ComingResults}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(${-index * 100}% )`,
            }}
          >
            {upcomingFilms.length > 0 &&
              upcomingFilms.map((movie) => {
                if (movie.primaryImage && movie.primaryImage.url !== "")
                  return <ShowResults key={movie.id} data={movie} />;
              })}
            <div
              onClick={() => {
                props.setMore(true);
              }}
              className={styles.moreButton}
            >
              <h1>MORE</h1>
            </div>
          </div>
        </div>
        <button onClick={goNextHandler} className={styles.moveBtn}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default ComingSoon;

import { Fragment, useEffect, useState } from "react";
import styles from "./ShowList.module.css";
import axios from "axios";
import ShowResults from "../Show results/ShowResults";
import { Link } from "react-router-dom";

function ShowList(props) {
  let savedList;
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState([]);
  useEffect(() => {
    //Fetching for some random results from API
    const getRandomTopRated = async () => {
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/random",
        params: {
          startYear: "2018",
          endYear: "2023",
          limit: "15",
          list: props.list,
          genre: props.genreRequest,
        },
        headers: {
          "X-RapidAPI-Key":
            "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        localStorage.setItem(
          `${props.list}`,
          JSON.stringify(response.data.results)
        );
        setResults(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    if (savedList === null) getRandomTopRated();
  }, [props]);
  savedList = JSON.parse(localStorage.getItem(`${props.list}`));

  //Buttons for handling page navigation
  const goBackHandler = () => {
    if (index > 0) setIndex(index - 1);
  };

  const goNextHandler = () => {
    if (index < 3) setIndex(index + 1);
  };

  return (
    <div>
      <h1 className={styles.mainTitle}>{props.title}</h1>
      <div className={styles.showPopular}>
        <button onClick={goBackHandler} className={styles.moveBtn}>
          {"<"}
        </button>
        <div className={styles.popularResults}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(${-index * 100}% )`,
            }}
          >
            {/*Display the results, if saved to localhost otherwise we have a backup state for the first render*/}
            {savedList !== null && savedList.length > 0
              ? savedList.map((movie) => {
                  if (movie.primaryImage && movie.primaryImage.url !== "")
                    return (
                      <Fragment key={movie.id}>
                        <ShowResults data={movie} />
                      </Fragment>
                    );
                })
              : results.map((movie) => {
                  if (movie.primaryImage && movie.primaryImage.url !== "")
                    return (
                      <Fragment key={movie.id}>
                        <ShowResults data={movie} />
                      </Fragment>
                    );
                })}
            <Link
              to={`/more-results/${props.list}`}
              className={styles.moreButton}
            >
              <h1>MORE</h1>
            </Link>
          </div>
        </div>
        <button onClick={goNextHandler} className={styles.moveBtn}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default ShowList;

import { useEffect, useState } from "react";
import styles from "./GenreResults.module.css";
import axios from "axios";
import DetailedResults from "../detailed results/DetailedResults";
import { useSelector } from "react-redux";

function GenreResults(props) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const genre = useSelector((state) => state.genre);

  useEffect(() => {
    const getGenreResults = async () => {
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles",
        params: {
          genre: genre,
          year: props.currentYear,
          limit: "28",
          titleType: props.type,
          page: page,
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
          `genres-results`,
          JSON.stringify(response.data.results)
        );
        setResults(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    if (props.genreRequest || props.currentYear || page) getGenreResults();
  }, [genre, page]);

  const savedData = JSON.parse(localStorage.getItem(`genres-results`));

  return (
    <div>
      <div>
        <h1 className={styles.mainTitle}>{props.title}</h1>
        <div className={styles.showResults}>
          <div className={styles.resultsContainer}>
            {savedData && savedData !== null
              ? savedData.map((movie) => {
                  //Passing the result to component that shows filtered results
                  return (
                    <div className={styles.movieOrSeries} key={movie.id}>
                      <DetailedResults data={movie} />
                    </div>
                  );
                })
              : results.map((movie) => {
                  return (
                    <div className={styles.movieOrSeries} key={movie.id}>
                      <DetailedResults data={movie} />
                    </div>
                  );
                })}
          </div>
          <div className={styles.pageButtons}>
            <button
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
            >
              Previous
            </button>
            <div>{page}</div>
            <button onClick={() => setPage(page + 1)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenreResults;

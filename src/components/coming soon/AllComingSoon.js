import { useEffect, useState } from "react";
import styles from "./AllComingSoon.module.css";
import axios from "axios";
import DetailedResults from "../detailed results/DetailedResults";

function AllComingSoon(props) {
  const [upcomingFilms, setUpcomingFilms] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getUpcomingMovies = async function () {
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
        params: { limit: "28", page: page },
        headers: {
          "X-RapidAPI-Key":
            "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setUpcomingFilms(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getUpcomingMovies();
  }, [upcomingFilms, page]);

  return (
    <div className={styles.more}>
      <h1>More options</h1>
      {upcomingFilms &&
        upcomingFilms.map((result) => {
          return <DetailedResults key={result.id} data={result} />;
        })}
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
  );
}
export default AllComingSoon;

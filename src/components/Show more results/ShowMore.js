import { useEffect, useState } from "react";
import styles from "./ShowMore.module.css";
import axios from "axios";
import DetailedResults from "../detailed results/DetailedResults";

function ShowMore(props) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const getRandomTopRated = async () => {
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/random",
        params: {
          startYear: "2018",
          endYear: "2023",
          limit: "28",
          list: props.list,
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
        console.log(response.data.results);
        localStorage.setItem(
          "more-options",
          JSON.stringify(response.data.results)
        );
        setResults(response.data.results);
        console.log(results);
      } catch (error) {
        console.error(error);
      }
    };
    //Call API when no data are saved to localhost
    if (moreOptions === null) getRandomTopRated();
  }, [props, page]);

  const moreOptions = JSON.parse(localStorage.getItem(`more-options`));

  return (
    <div className={styles.more}>
      <h1>More options</h1>
      {moreOptions &&
        moreOptions.length > 0 &&
        moreOptions.map((result) => {
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

export default ShowMore;

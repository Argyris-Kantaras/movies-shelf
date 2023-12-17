import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import ShowResults from "../Show results/ShowResults";

function Search(props) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const searchHandler = async () => {
      const options = {
        method: "GET",
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${props.searchQuery}`,
        params: {
          exact: "false",
          limit: "50",
          sort: "year.decr",
        },
        headers: {
          "X-RapidAPI-Key":
            "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setResults(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    if (props.searchQuery !== "") searchHandler();
  }, [props]);

  return (
    <div>
      <h2 onClick={() => props.setSearchQuery("")} className={styles.backBtn}>
        {"Go Back"}
      </h2>
      {results.length > 0 &&
        results.map((movie) => {
          return <ShowResults data={movie} key={movie.id} />;
        })}
    </div>
  );
}

export default Search;

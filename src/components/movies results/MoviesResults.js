import { useState } from "react";
import SearchForm from "../Search/SearchForm";
import styles from "./MoviesResults.module.css";
import Search from "../Search/Search";
import ShowList from "../Show list/ShowList";
import Genres from "../genres/Genres";
import GenreResults from "../genres/GenreResults";
import { useDispatch, useSelector } from "react-redux";

function MoviesResults() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentYear, setCurrentYear] = useState(2023);
  const [more, setMore] = useState(false);
  const genre = useSelector((state) => state.genre);
  const dispatch = useDispatch();

  return (
    <div className={styles.results}>
      {/* Display the search form */}
      <SearchForm setSearchQuery={setSearchQuery} />
      {/* Display the genres filter */}
      <Genres currentYear={currentYear} setCurrentYear={setCurrentYear} />

      {/* Display the default lists */}
      <div
        style={
          searchQuery === "" && genre === "" && !more
            ? { display: "block", transition: "0.5s" }
            : { display: "none", transition: "0.5s" }
        }
      >
        <ShowList
          setMore={setMore}
          list="top_boxoffice_200"
          title="Top Boxoffice Movies"
        />
        <ShowList
          setMore={setMore}
          list="top_rated_english_250"
          title="Top Rated Movies"
        />
      </div>

      {/* Display the genre results when client requests and hide the rest */}
      <div
        style={
          searchQuery === "" && genre !== "" && !more
            ? { display: "block", transition: "0.5s" }
            : { display: "none", transition: "0.5s" }
        }
      >
        <h2
          onClick={() => dispatch({ type: "genre", genre: "" })}
          className={styles.backBtn}
        >
          {" "}
          {"Go Back"}
        </h2>
        <GenreResults
          title={`${genre} movies`}
          currentYear={currentYear}
          type="movie"
        />
      </div>
      {/* Display the search Results */}
      <div
        style={searchQuery === "" ? { display: "none" } : { display: "block" }}
      >
        <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      </div>
    </div>
  );
}
export default MoviesResults;

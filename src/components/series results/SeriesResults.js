import { useState } from "react";
import SearchForm from "../Search/SearchForm";
import styles from "./SeriesResults.module.css";
import Search from "../Search/Search";
import ShowList from "../Show list/ShowList";
import GenreResults from "../genres/GenreResults";
import Genres from "../genres/Genres";
import { useDispatch, useSelector } from "react-redux";

function SeriesResults() {
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
          list="most_pop_series"
          title="Popular Series"
        />
        <ShowList
          setMore={setMore}
          list="top_rated_series_250"
          title="Top Rated Series"
        />
      </div>
      {/* display results after the genre pick */}
      <div
        className={styles.genreSeries}
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
          type="tvSeries"
        />
      </div>

      {/* display search results according to query */}
      <div
        style={searchQuery === "" ? { display: "none" } : { display: "block" }}
      >
        <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      </div>
    </div>
  );
}
export default SeriesResults;

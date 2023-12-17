import styles from "./Results.module.css";
import ComingSoon from "../coming soon/ComingSoon";
import Search from "../Search/Search";
import { useRef, useState } from "react";
import SearchForm from "../Search/SearchForm";
import ShowList from "../Show list/ShowList";
import ShowMore from "../Show more results/ShowMore";
import AllComingSoon from "../coming soon/AllComingSoon";

function Results(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [more, setMore] = useState(false);
  const [moreUpcoming, setMoreUpcoming] = useState(false);
  const [list, setList] = useState("");

  console.log(list);

  return (
    <div className={styles.results}>
      <SearchForm setSearchQuery={setSearchQuery} />
      <div>
        <div
          style={
            searchQuery === "" && !more && !moreUpcoming
              ? { display: "block", transition: "0.5s" }
              : { display: "none", transition: "0.5s" }
          }
        >
          <ComingSoon setMore={setMoreUpcoming} />
          <ShowList
            setMore={setMore}
            list="most_pop_series"
            title="Amazing series"
            setList={setList}
          />
        </div>
        <div
          className={styles.genreSeries}
          style={
            searchQuery === "" && !more && moreUpcoming
              ? { display: "block", transition: "0.5s" }
              : { display: "none", transition: "0.5s" }
          }
        >
          <h2 onClick={() => setMoreUpcoming(false)} className={styles.backBtn}>
            {"Go Back"}
          </h2>
          {/* <AllComingSoon list={list} /> */}
        </div>

        <div
          style={
            searchQuery !== "" && !more
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}

export default Results;

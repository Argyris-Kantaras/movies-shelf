import styles from "./SearchForm.module.css";
import { useRef } from "react";
import searchIcon from "../../images/search-icon-white.png";

function SearchForm(props) {
  const searchInputRef = useRef();

  const submitSearchHandler = function (e) {
    e.preventDefault();
    props.setSearchQuery(searchInputRef.current.value);
  };
  return (
    <form onSubmit={submitSearchHandler} className={styles.searchForm}>
      <img className={styles.searchIcon} src={searchIcon} />
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Movies and Series search"
        className={styles.searchInput}
      />
    </form>
  );
}
export default SearchForm;

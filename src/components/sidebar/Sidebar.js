import styles from "./Sidebar.module.css";
import logoIcon from "../../images/logo-red.png";
import homeIcon from "../../images/home-white.png";
import filmIcon from "../../images/film-white.png";
import seriesIcon from "../../images/series-white.png";
import bookmarkIcon from "../../images/bookmark-white.png";
import registerIcon from "../../images/key.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  // Handling the state when we press link to another page
  const changePageHandler = (e) => {
    dispatch({ type: "change-page", page: Number(e.target.name) });
    dispatch({ type: "genre", genre: "" });
    localStorage.setItem("more-options", JSON.stringify(null));
  };

  return (
    <div className={styles.sidebar}>
      <img className={styles.logo} src={logoIcon} />
      <nav className={styles.navigation}>
        <Link to={"/"}>
          <img
            name={1}
            onClick={changePageHandler}
            style={
              currentPage === 1
                ? {
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    borderRadius: "50%",
                    opacity: "10",
                  }
                : null
            }
            src={homeIcon}
          />
        </Link>
        <Link to={"/movies"}>
          <img
            name={2}
            onClick={changePageHandler}
            style={
              currentPage === 2
                ? {
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    borderRadius: "50%",
                    opacity: "10",
                  }
                : null
            }
            src={filmIcon}
          />
        </Link>
        <Link to={"/series"}>
          <img
            name={3}
            onClick={changePageHandler}
            style={
              currentPage === 3
                ? {
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    borderRadius: "50%",
                    opacity: "10",
                  }
                : null
            }
            src={seriesIcon}
          />
        </Link>
        <Link to={"/bookmarks"}>
          <img
            name={4}
            onClick={changePageHandler}
            style={
              currentPage === 4
                ? {
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    borderRadius: "50%",
                    opacity: "10",
                  }
                : null
            }
            src={bookmarkIcon}
          />
        </Link>
        <Link to={"/register"}>
          <img
            name={5}
            onClick={changePageHandler}
            style={
              currentPage === 5
                ? {
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    borderRadius: "50%",
                    opacity: "10",
                  }
                : null
            }
            src={registerIcon}
          />
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;

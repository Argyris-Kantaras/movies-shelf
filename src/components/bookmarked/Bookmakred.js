import styles from "./Bookmarked.module.css";
import bookmarkIcon from "../../images/bookmark-white.png";
import bookmarkEmpty from "../../images/bookmark-empty.png";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Bookmarked(props) {
  const [bookmarked, setBookmarked] = useState(false);
  const userEmail = useSelector((state) => state.userEmail);
  const savedIDs = useSelector((state) => state.savedIDs);
  const dispatch = useDispatch();

  useEffect(() => {
    savedIDs.length > 0 &&
      savedIDs.forEach((id) => {
        if (id === props.data.id) setBookmarked(true);
      });
  }, [props]);

  //Adding or removing favorites accordingly
  const addRemoveBookmark = async () => {
    bookmarked ? setBookmarked(false) : setBookmarked(true);
    if (userEmail === "") {
      const error = new Error("Not signed in");
      error.message = "Not Signed in";
      dispatch({ type: "error", error: error.message });
    }
    if (props.functional) {
      try {
        const response = await axios.post(
          "http://localhost:8000/server/bookmarks",
          {
            userEmail: userEmail,
            ...props.data,
          }
        );
      } catch (error) {
        dispatch({ type: "error", error: error.response.data });
      }
    }
  };

  return (
    <Fragment>
      <img
        onClick={addRemoveBookmark}
        className={styles.bookmarkIcon}
        src={bookmarked ? bookmarkIcon : bookmarkEmpty}
        style={bookmarked ? { backgroundColor: "green" } : null}
        alt=""
      />
    </Fragment>
  );
}
export default Bookmarked;

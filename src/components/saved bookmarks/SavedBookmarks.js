import { useEffect, useState } from "react";
import styles from "./SavedBookmarks.module.css";
import axios from "axios";
import DetailedResults from "../detailed results/DetailedResults";
import { useSelector } from "react-redux";

function SavedBookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const userEmail = useSelector((state) => state.userEmail);
  useEffect(() => {
    const getBookmarks = async function () {
      const response = await axios.post(
        "http://localhost:8000/server/saved-bookmarks",
        {
          email: userEmail,
        }
      );

      try {
        const temporaryArray = [];
        for (const key in response.data) {
          temporaryArray.push({
            key: key,
            ...response.data[key],
          });
        }
        setBookmarks(temporaryArray);
      } catch (error) {
        console.error(error);
      }
    };
    if (userEmail !== "") getBookmarks();
    console.log(bookmarks);
  }, []);
  return (
    <div className={styles.savedBookmarks}>
      <h1>My Favorites</h1>
      <div>
        {bookmarks.length > 0 ? (
          bookmarks.map((film) => {
            return <DetailedResults data={film} />;
          })
        ) : (
          <div className={styles.noResults}>
            No Results
            <div>
              Please sign-in or register and start saving your favorites!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedBookmarks;

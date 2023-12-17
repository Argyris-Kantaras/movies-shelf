import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function GetAlreadySaved() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.userEmail);

  useEffect(() => {
    const getBookmarks = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/server/saved-bookmarks",
          {
            email: userEmail,
          }
        );
        const ids = [];
        response.data.forEach((film) => {
          ids.push(film.id);
        });
        dispatch({ type: "saved-ids", savedIDs: ids });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    if (userEmail !== "") getBookmarks();
  }, []);

  return null;
}

export default GetAlreadySaved;

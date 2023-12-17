import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Genres.module.css";
import YearFilter from "../year filter/YearFilter";
import { useDispatch, useSelector } from "react-redux";

//Component for display the genres list and functionality to choose a genre as a filter
function Genres(props) {
  const [activeGenre, setActive] = useState();
  const genre = useSelector((state) => state.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    if (genre === "") setActive(null);
    const getGenres = async () => {
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/utils/genres",
        headers: {
          "X-RapidAPI-Key":
            "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        localStorage.setItem(`genres`, JSON.stringify(response.data.results));
      } catch (error) {
        console.error(error);
      }
    };
    if (!savedGenres) getGenres();
  }, [props]);

  const savedGenres = JSON.parse(localStorage.getItem(`genres`));

  return (
    <div className={styles.genres}>
      <h3>Genres</h3>
      {savedGenres
        ? savedGenres.map((genre, i) => {
            if (genre !== null)
              return (
                <div
                  style={
                    activeGenre === i
                      ? {
                          backgroundColor: "rgba(255, 255, 0, 0.8)",
                          color: "black",
                        }
                      : null
                  }
                  onClick={() => {
                    setActive(i);
                    dispatch({ type: "genre", genre: genre });
                  }}
                  className={styles.everyGenre}
                  key={genre}
                >
                  {genre}
                </div>
              );
          })
        : null}

      <YearFilter
        currentYear={props.currentYear}
        setCurrentYear={props.setCurrentYear}
      />
    </div>
  );
}
export default Genres;

import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import BookmarkesPage from "./pages/BookmarkedPage";
import React, { useState } from "react";
import StoreContext from "./store/store-context";
import SearchPage from "./pages/SearchPage";
import RegisterPage from "./pages/RegisterPage";
import MoreResultsPage from "./pages/MoreResultsPage";
import GetAlreadySaved from "./components/get already bookmarked/GetAlreadySaved";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  localStorage.setItem("more-options", JSON.stringify(null));
  localStorage.setItem("most_pop_series", JSON.stringify(null));
  localStorage.setItem("top_rated_english_250", JSON.stringify(null));
  localStorage.setItem("top_boxoffice_200", JSON.stringify(null));
  localStorage.setItem("top_rated_series_250", JSON.stringify(null));

  return (
    <div className={styles.app}>
      <GetAlreadySaved />
      <StoreContext.Provider value={{ currentPage, setCurrentPage }}>
        <Routes>
          <Route
            path="/"
            element={<Homepage setCurrentPage={setCurrentPage} />}
          ></Route>
          <Route path="/search/:id" element={<SearchPage />}></Route>
          <Route
            path="/movies"
            element={<MoviesPage setCurrentPage={setCurrentPage} />}
          ></Route>
          <Route
            path="/series"
            element={<SeriesPage setCurrentPage={setCurrentPage} />}
          ></Route>
          <Route
            path="/bookmarks"
            element={<BookmarkesPage setCurrentPage={setCurrentPage} />}
          ></Route>
          <Route
            path="/register"
            element={<RegisterPage setCurrentPage={setCurrentPage} />}
          ></Route>
          <Route
            path="/more-results/:id"
            element={<MoreResultsPage setCurrentPage={setCurrentPage} />}
          ></Route>
        </Routes>
      </StoreContext.Provider>
    </div>
  );
}

export default App;

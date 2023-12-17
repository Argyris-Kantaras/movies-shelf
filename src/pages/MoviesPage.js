import GetAlreadySaved from "../components/get already bookmarked/GetAlreadySaved";
import MoviesResults from "../components/movies results/MoviesResults";
import Sidebar from "../components/sidebar/Sidebar";

function MoviesPage(props) {
  return (
    <div style={{ display: "flex", minHeight: "900px" }}>
      <Sidebar setCurrentPage={props.setCurrentPage} />
      <MoviesResults />
      <GetAlreadySaved />
    </div>
  );
}

export default MoviesPage;

import GetAlreadySaved from "../components/get already bookmarked/GetAlreadySaved";
import SeriesResults from "../components/series results/SeriesResults";
import Sidebar from "../components/sidebar/Sidebar";

function SeriesPage(props) {
  return (
    <div>
      <Sidebar setCurrentPage={props.setCurrentPage} />
      <SeriesResults />
      <GetAlreadySaved />
    </div>
  );
}

export default SeriesPage;

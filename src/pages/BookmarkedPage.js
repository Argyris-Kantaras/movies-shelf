import SavedBookmarks from "../components/saved bookmarks/SavedBookmarks";
import Sidebar from "../components/sidebar/Sidebar";

function BookmarkesPage(props) {
  return (
    <div style={{ display: "flex", minHeight: "900px" }}>
      <Sidebar setCurrentPage={props.setCurrentPage} />
      <SavedBookmarks />
    </div>
  );
}

export default BookmarkesPage;

import { useParams } from "react-router-dom";
import ShowMore from "../components/Show more results/ShowMore";
import Sidebar from "../components/sidebar/Sidebar";

const MoreResultsPage = (props) => {
  const list = useParams();
  return (
    <div style={{ display: "flex", minHeight: "900px" }}>
      <Sidebar setCurrentPage={props.setCurrentPage} />
      <ShowMore list={list.id} />
    </div>
  );
};

export default MoreResultsPage;

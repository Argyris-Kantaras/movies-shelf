import styles from "./Homepage.module.css";
import Sidebar from "../components/sidebar/Sidebar";
import Results from "../components/results/Results";
import GetAlreadySaved from "../components/get already bookmarked/GetAlreadySaved";

function Homepage(props) {
  return (
    <div className={styles.homepage}>
      <Sidebar setCurrentPage={props.setCurrentPage} />
      <Results />
      <GetAlreadySaved />
    </div>
  );
}

export default Homepage;

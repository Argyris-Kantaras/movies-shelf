import { useParams } from "react-router-dom";
import ShowDetails from "../components/show details/ShowDetails";

function SearchPage() {
  const { id } = useParams();

  return (
    <div>
      <ShowDetails id={id} />
    </div>
  );
}

export default SearchPage;

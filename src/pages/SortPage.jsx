import { useLocation } from "react-router-dom";
import { Movies } from "../components/Movies";

export const SortPage = ({ url, title }) => {
  const location = useLocation();
  return <Movies url={url} title={title} sort={location?.state} />;
};

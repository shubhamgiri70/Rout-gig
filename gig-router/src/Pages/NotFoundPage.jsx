import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="error">
      <div>404 not found</div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;

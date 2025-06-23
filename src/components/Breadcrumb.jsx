import { Link } from "react-router-dom";

const Breadcrumb = ({ pageName }) => {
  return (
    <div className="mb-6 sm:flex-row sm:items-center sm:justify-between">
      <nav className="text-sm mb-2">
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/">Home /</Link>
          </li>
          <li className="text-primary">{pageName}</li>
        </ol>
      </nav>
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName?.toUpperCase()}
      </h2>
    </div>
  );
};

export default Breadcrumb;

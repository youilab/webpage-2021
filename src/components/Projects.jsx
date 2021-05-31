import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { getSearch } from "../selectors/getSearch";

export const Projects = () => {
  const [search, setSearch] = useState("");
  const [projectsSearch, setProjects] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = `Projects | You-i Lab`;

    setProjects(getSearch(search));
    if (search === "") {
      setProjects(getSearch(""));
      setShow(false);
      console.log(show);
    }
  }, [search, show]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setShow(true);

    console.log(projects);
  };

  return (
    <div className="projects__container">
      <div className="projects__search-container nav-shift">
        <form action="">
          <input
            value={search}
            onChange={handleInputChange}
            type="text"
            placeholder="Search.."
            name="search"
            autoComplete="off"
          />
          <button onClick={handleSearch} type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        {search && (
          <div className="navbar__search-results">
            {projectsSearch.map((project) => (
              <Link key={project.url} to={`/projects/${project.url}`}>
                {" "}
                {project.title}{" "}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="project__title-container">
        <h1>PROJECTS</h1>
        <p>
          These are our projects that we have created in You-i Lab throughout
          our history
        </p>
      </div>
      <div className="projects__cards-container">
        {projects.map((p, i) => (
          <div key={i} className="projects__card-container">
            <div className="projects__card-imageContainer">
              <div
                style={{
                  background: `url(${p.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="projects__card-image"
              ></div>
            </div>
            <div className="projects__card-info">
              <h2>{p.title}</h2>
              <p>{p.description}</p>

              <div className="projects__card-button">
                {p.contentProject ? 
                   <Link to={`/projects/${p.url}`} className="btn">
                   Read More
                  </Link> 
                  : <p className="btn-disabled">Coming up soon...</p> 
                  }
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// copy
import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load project data from projects.json
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error loading project data:", error));
  }, []);

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      {/* filter button */}
      <ul className="filter-list">
        {["All", "Web design", "Applications", "Web development"].map(
          (category) => (
            <li key={category} className="filter-item">
              <button className={category === selectCategory ? "active" : ""}>
                {category}
              </button>
            </li>
          )
        )}
      </ul>
      {/* show portfolio data */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => {
            <li key={project.id} className="project-item active">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt="" />
                </figure>
                <h3 className="project-title">{}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>;
          })}
        </ul>
      </section>
    </section>
  );
}

export default Portfolio;

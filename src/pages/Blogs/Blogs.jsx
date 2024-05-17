import BlogPost from "./BlogPost.jsx";
import { useState, useEffect } from "react";
import "./blog.css";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); // set post per page number

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = blogs.slice(indexOfFirstPost, indexOfLastPost); // slice function to get the post per page

  // change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="blog-posts">
      <header>
        <h2 className="h2 article-title">Blogs</h2>
      </header>
      <div className="blof-posts">
        <ul className="blog-posts-list">
          {currentPost.map((post, index) => (
            <BlogPost key={index} post={post} />
          ))}
        </ul>
      </div>
      {/* pagination */}
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              onClick={() => paginate(currepage - 1)}
              className="page-link"
            >
              Previous
            </button>
          </li>
          {Array.from(
            { length: Math.ceil(blogs.length / postsPerPage) },
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
          <li
            className={`page-item ${
              currentPage === Math.ceil(blogs.length / postsPerPage)
                ? "disabled"
                : ""
            }`}
          >
            <button
              onClick={() => paginate(currepage + 1)}
              className="page-link"
            >
              Previous
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Blog;

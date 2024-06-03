import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Search from "../Components/Search";

export default function BookListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("title");
  const books = [
    {
      id: 2,
      title: "Book Title 2",
      author: "Author 2",
      img: "https://www.thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
    },
    {
      id: 1,
      title: "Book Title 1",
      author: "Author",
      img: "https://www.thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
    },
    {
      id: 3,
      title: "Book Title 3",
      author: "bb Author 3",
      img: "https://www.thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
    },
    {
      id: 4,
      title: "Book Title 4",
      author: "zzAuthor 4",
      img: "https://www.thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
    },
    {
      id: 5,
      title: "Book Title 5",
      author: "Author 5",
      img: "https://www.thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
    },
    {
      id: 6,
      title: "Book Title 6",
      author: "Author 6",
      img: "https://www.thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
    },
    // Add more books as needed
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 3;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  // const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const sortedBooks = [...books].sort((a, b) => {
    if (sortCriteria === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortCriteria === "author") {
      return a.author.localeCompare(b.author);
    } else if (sortCriteria === "rating") {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <nav class="d-flex  navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            BookNest
          </a>

          <div className="d-flex">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="col-6 d-flex items-center justify-center ">
              <label
                htmlFor="sortCriteria"
                className="form-label whitespace-nowrap "
              >
                Sort By:
              </label>
              <select
                id="sortCriteria"
                className="form-select ms-3"
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
              >
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="rating">Average Rating</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
      <div className="row my-5 px-4 py-5 gap-4 bg-light justify-content-center">
        {currentBooks.map((book) => (
          <Link
            to={`/book/${book.id}`}
            key={book.id}
            className="col-md-5 col-xl-3 card text-decoration-none text-dark"
          >
            <img src={book.img} className="card-img-top p-4" alt="img" />
            <div className="card-body">
              <div className="fs-3 fw-bold text-dark">{book.title}</div>
              <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-2">
                {book.author}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({});

  const handleSubmit = async () => {
    try {
      const url = `http://localhost:8080/api/?search=${search}`;
      const res = await axios.get(url);
      const data = res.data;
      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="searchContainer">
          <input
            type="text"
            placeholder="What do you want to learn?"
            onChange={handleSearch}
            value={search}
          />
          <img
            className="search-icon"
            onClick={handleSubmit}
            src="data:image/png;base64,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"
          ></img>
        </div>
        {Object.keys(results).length !== 0 && (
          <div className="results-container">
            {results.courses.length !== 0 && (
              <div className="courses-container">
                {results.courses.map((course) => (
                  <div className="ResultCard">
                    <div className="Result">
                      <div className="ResultImage">
                        <img src={course.courseImg}></img>
                      </div>
                      <div className="ResultInformation">
                        <div className="ResultTitle">
                          <h3>{course.courseName}</h3>
                        </div>
                        <div className="ResultDesc">
                          <p>{course.courseDesc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;

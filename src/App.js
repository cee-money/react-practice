import React from "react";
import "./App.css";
import Header from "./Header";
import CardList from "./CardList";
import Books from "./bookTitles.json";
import CardHeader  from "./CardHeader";

function App() {
  let booksArr = Books.data;
  return (
    <div className="App">
      <div className="row">
        <Header />
      </div>
      <br />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <CardHeader props={"Want To Read"} />
          {booksArr.map((book, index) =>
            book.status === "Want To Read" ? (
              <CardList {...book} key={index} />
            ) : null
          )}
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <CardHeader props={"Currently Reading"} />
          {booksArr.map((book, index) =>
            book.status === "Currently Reading" ? (
              <CardList {...book} key={index} />
            ) : null
          )}
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <CardHeader props={"Read"} />
          {booksArr.map((book, index) =>
            book.status === "Read" ? <CardList {...book} key={index} /> : null
          )}
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default App;

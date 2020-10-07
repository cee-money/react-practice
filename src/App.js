import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Books from "./bookTitles.json";
import CardHeader from "./components/CardHeader";

export default function App() {
  let booksArr = Books.data;
  const [status, setStatus] = useState("Want To Read");

  const handleClick = id => {
    console.log(id);
    console.log(booksArr[id].title);
    console.log("old status", booksArr[id].status);

    switch (booksArr[id].status) {
      case "Want To Read":
        booksArr[id].status = "Currently Reading";
        break;
      case "Currently Reading":
        booksArr[id].status = "Read";
        break;
      case "Read":
        booksArr[id].status = "Archived";
        break;
      default:
        break;
    }
    let newArr = [...booksArr];
    setStatus(newArr);
    console.log("new status", booksArr[id].status);
    console.log(booksArr[id]);
  };
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
          {booksArr.map((book, key) =>
            book.status === "Want To Read" ? (
              <CardList
                key={key}
                id={book.index}
                status={book.status}
                title={book.title}
                onClick={id => handleClick(id)}
              />
            ) : null
          )}
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <CardHeader props={"Currently Reading"} />
          {booksArr.map((book, key) =>
            book.status === "Currently Reading" ? (
              <CardList
                key={key}
                id={book.index}
                status={book.status}
                title={book.title}
                onClick={id => handleClick(id)}
              />
            ) : null
          )}
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <CardHeader props={"Read"} />
          {booksArr.map((book, key) =>
            book.status === "Read" ? (
              <CardList
                key={key}
                id={book.index}
                status={book.status}
                title={book.title}
                onClick={id => handleClick(id)}
              />
            ) : null
          )}
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

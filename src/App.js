import { useState } from "react";
import "./styles.css";

var book1 = {
  motivational: "Wings of Fire",
  fictional: "Immortals of Meluha",
  business: "Zero to One"
};
var book2 = {
  motivational: "12th Fail",
  fictional: "Girl in Room 105",
  business: "Rich dad Poor dad"
};
var rating1 = {
  motivational: "(4.0 / 5.0)",
  fictional: "(3.0 / 5.0)",
  business: "(4.5 / 5.0)"
};
var rating2 = {
  motivational: "(5.0 / 5.0)",
  fictional: "(3.5 / 5.0)",
  business: "(5.0 / 5.0)"
};

export default function App() {
  const [bookOne, setBookOne] = useState("");
  const [bookTwo, setBookTwo] = useState("");
  const [ratingOne, setRatingOne] = useState("");
  const [ratingTwo, setRatingTwo] = useState("");

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <div id="categiri">
        <p onClick={() => clickHandeler("motivational")}>Motivational</p>
        <p onClick={() => clickHandeler("fictional")}>Fiction</p>
        <p onClick={() => clickHandeler("business")}>Business</p>
      </div>
      <hr></hr>

      <div id="output1">
        {bookOne}
        {"\n"}
        {ratingOne}
      </div>

      <div id="output2">
        {bookTwo}
        {"\n"}
        {ratingTwo}
      </div>
    </div>
  );

  function clickHandeler(key) {
    var bookOne = book1[key];
    setBookOne(bookOne);

    var bookTwo = book2[key];
    setBookTwo(bookTwo);

    var ratingOne = rating1[key];
    setRatingOne(ratingOne);

    var ratingTwo = rating2[key];
    setRatingTwo(ratingTwo);
  }
}

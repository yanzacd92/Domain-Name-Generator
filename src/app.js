/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domains2 = pronoun.flatMap(p => adj.map(a => noun.map(n => p + a + n)));
  let result = domains2.toString().replaceAll(",", ".com <br/>");
  console.log(result);
  document.getElementById("combinations").innerHTML = result;
};

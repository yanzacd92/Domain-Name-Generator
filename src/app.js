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
  let domain = [".com", ".net", ".us", ".io"];
  let domains2 = pronoun.flatMap(p =>
    adj.map(a => noun.map(n => domain.map(d => p + a + n + d)))
  );
  let result = domains2.toString().replaceAll(",", "<br/>");
  console.log(result);
  document.getElementById("combinations").innerHTML = result;
};

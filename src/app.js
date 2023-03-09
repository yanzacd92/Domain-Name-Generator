/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronounList = ["the", "our"];
  let adjList = ["great", "big"];
  let nounList = ["jogger", "racoon"];
  let domainList = [".com", ".net", ".us", ".io"];
  let domainResults = pronounList.flatMap(pronoun =>
    adjList.map(adjective =>
      nounList.map(noun =>
        domainList.map(domain => pronoun + adjective + noun + domain)
      )
    )
  );
  let result = domainResults.toString().replaceAll(",", "<br/>");
  console.log(result);
  document.getElementById("combinations").innerHTML = result;
};

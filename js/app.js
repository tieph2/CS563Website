import { addProjectsToDom } from "./loadProject";

window.onload = function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  addProjectsToDom(projects);
  console.log("Document loaded");
};

projects = {
  project1 : {
    name: "Headphone Database",
    thumbnail: '/images/logo.svg',
    languages: "PostgresQL, Python",
    url: "www.github.com",
    description: "This is a description of project 1. It is a headphone database."
  },
  project2 : {
    name: "Lofi-Aleatory",
    thumbnail: '/images/logo.svg',
    languages: "C++",
    url: "www.github.com",
    description: "This is a description of project 1. It's a random sound generator"
  }
}
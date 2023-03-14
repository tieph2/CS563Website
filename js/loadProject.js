projects = [
  {
    name: "Headphone Database",
    thumbnail: "/images/logo.svg",
    languages: "PostgresQL, Python",
    url: "www.github.com",
    description:
      "This is a description of project 1. It is a headphone database.",
  },
  {
    name: "Lofi-Aleatory",
    thumbnail: "/images/logo.svg",
    languages: "C++",
    url: "www.github.com",
    description:
      "This is a description of project 1. It's a random sound generator",
  },
];
function addProjectsToDom(projects) {
  $("#results").append($("<div>").attr("class", "cardGrid"));
  for (const project of projects) {
    let imgAttribute = {
      class: "project-thumbnail",
      src: project.thumbnail,
      alt: `Project thumbnail`,
    };

    let $figure = $("<div/>", { class: "grid-item card" });
    let $image = $("<img>", imgAttribute);
    let $title = $("<h3>", {
      class: "project-header",
      text: project.name,
    });

    $figure.append($image).append($title).appendTo("#project-grid");
  }
}
$(document).ready(function () {
  addProjectsToDom(projects);
});

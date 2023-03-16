projects = [
  {
    name: "Headphone Database",
    thumbnail: "images/database-schema.png",
    technology: ["SQL", "Python"],
    url: "www.github.com",
    description:
      "As an avid audiophile, I love collecting headphones, but it's hard to pick the right pair of headphones that fit my budget and use case. That's why for my CS586 Database class, I created this headphone database in PostgreSQL. Then with some Python code, I made a program that can query the database and output a few intereseting visualization from the results. ",
  },
  {
    name: "Lofi-Aleatory",
    thumbnail: "images/sound-generator.png",
    technology: ["C++"],
    url: "https://github.com/Cesium1289/Lofi-Aleatory",
    description:
      "This is a very simple sound generator made in C++. Users can change the sound with parameters like root note, beats-per-minute, the ADSR envelope, and choose from 4 types of sound wave. This is my first big collaboration project. I learned a lot about C++, as well as coding and debugging in Visual Studio.",
  },
];
function addProjectsToDom(projects) {
  $("#results").append($("<div>").attr("class", "cardGrid"));
  for (const project of projects) {
    let imgAttribute = {
      class: "project-thumbnail",
      src: project.thumbnail,
      alt: `${project.name} project thumbnail `,
    };

    let $figure = $("<div>", { class: "project-card card" });
    let $image = $("<img>", imgAttribute);

    let $projectText = $("<div>", {
      class: "project-card-text",
    });

    let $titleGroup = $("<div>", {
      class: "header-group",
    });
    let $title = $("<h3>", {
      class: "project-header",
      text: project.name,
    });
    let $technology = $("<h3>", {
      class: "project-caption",
    });

    let $description = $("<p>", {
      class: "project-description",
      text: project.description,
    });

    let $buttonContainer = $("<div>", {
      class: "card-btn-container"
    })

    
    let $gitHubButton = $("<a>", {
      class: "btn btn-secondary btn-square project-link-btn",
      href: project.url,
      text: "Go to Github",
    });
    
    $buttonContainer.append($gitHubButton);

    for (tech of project.technology) {
      let $tech = $("<div>", {
        class: "pill",
        text: tech,
      });
      $technology.append($tech);
    }

    $titleGroup.append($title).append($technology);
    $figure.append($image).appendTo("#project-grid");
    $projectText
      .append($titleGroup)
      .append($description)
      .appendTo($figure);
    $figure.append($buttonContainer);
  }
}
$(document).ready(function () {
  addProjectsToDom(projects);
});

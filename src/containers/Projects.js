import React from "react";
import CardProject from "../components/Cards";

const PROJECTS = [
  {
    imageUrl:
      "https://static01.nyt.com/images/2019/10/17/arts/17superman/17superman-superJumbo.jpg?quality=90&auto=webp",
    imageTitle: "",
    title: "SuperHeroPedia",
    description: "Dig through the biggest Super Hero database",
    path: "/superheroes",
  },
];

const Projects = () => {
  return (
    <div>
      {PROJECTS.map((e, i) => (
        <CardProject
          imageUrl={e.imageUrl}
          imageTitle={e.imageTitle}
          title={e.title}
          description={e.description}
          key={i}
          path={`/projects${e.path}`}
          // path={e.path}
        />
      ))}
    </div>
  );
};

export default Projects;

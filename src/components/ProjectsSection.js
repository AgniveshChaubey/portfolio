import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, CardHeader, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Randon Quote Machine",
    description:
      "An interface that generates random motivating quotes, fetching data from remote API.",
    getImageSrc: () => require("../images/photo2.png"),
    link : 'https://agniveshchaubey.github.io/fcc-random-quote-machine'
  },
  {
    title: "Markdown Previewer",
    description:
      "App that converts Markdown input to HTML optputs with the help of Marked linrary.",
    getImageSrc: () => require("../images/photo1.png"),
    link : 'https://agniveshchaubey.github.io/fcc-markdown-previewer'
  },
  {
    title: "Drum Pad",
    description:
      "Drum app for entertainment purpose, that produces pleasent sound -by both touch and keyboard input.",
    getImageSrc: () => require("../images/photo4.png"),
    link : 'https://agniveshchaubey.github.io/fcc-drum-machine'
  },
  {
    title: "Tic Tac Toe",
    description:
      "Amazing game that stores the state of users and declares the winner at the end.",
    getImageSrc: () => require("../images/photo3.png"),
    link : 'https://agniveshchaubey.github.io/React-project1-tic-tac-toe-game'
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#145b2d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          >
          </Card>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

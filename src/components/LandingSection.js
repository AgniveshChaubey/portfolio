import React from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from '../images/profilePic.jpg'

const greeting = "HELLO, I AM AGNIVESH CHAUBEY!";
const bio1 = "Transforming ideas into innovative solutions with a passion for software excellence.";
const bio2 = "I am a dedicated and passionate software developer experience in designing and building innovative software solutions. My love for technology drives me to constantly learn and explore new programming languages, frameworks, and tools. I enjoy collaborating with teams to deliver high-quality products that exceed expectations. With a strong focus on continuous learning and improvement, I am always seeking new challenges and opportunities to expand my skill set. My passion for software development is not only a career choice but a way of life, and I look forward to sharing my knowledge and expertise with others in the industry.";
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <Box maxWidth="auto">
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack p={5} align='center'>
        <Avatar mb={15} size="xl" src={profilePic} />
        <p style={{ fontSize: '20px' }}>{greeting}</p>
        <div></div>
        <Heading pb={5} fontSize={30} align='center' className="">{bio1}</Heading>
        <Heading fontSize={15} align='center'>{bio2}</Heading>
      </VStack>
    </FullScreenSection>
  </Box>
);

export default LandingSection;

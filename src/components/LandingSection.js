import React from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "HELLO, I AM AGNIVESH CHAUBEY!";
const bio1 = "A focused web developer building the Frontend of components that leads to the success of overall Project!";
const bio2 = "(specialised in Bootstrap,React)";

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
        <Avatar mb={15} size="xl" src="https://media.licdn.com/dms/image/D4D03AQHM7nAhoNdEWA/profile-displayphoto-shrink_800_800/0/1672151466526?e=1677715200&v=beta&t=ZsH6Gej1e4mzHlhg29e-njPdjP0JtSkjJkKtwkXzOdc" />
        <p style={{ fontSize: '20px' }}>{greeting}</p>
        <div></div>
        <Heading pb={5} fontSize={30} align='center' className="">{bio1}</Heading>
        <Heading fontSize={15}>{bio2}</Heading>
      </VStack>
    </FullScreenSection>
  </Box>
);

export default LandingSection;

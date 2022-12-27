import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Agnivesh!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack>
    <Avatar src="https://media.licdn.com/dms/image/D4D03AQHM7nAhoNdEWA/profile-displayphoto-shrink_800_800/0/1672151466526?e=1677715200&v=beta&t=ZsH6Gej1e4mzHlhg29e-njPdjP0JtSkjJkKtwkXzOdc" />
    <p>{greeting}</p>
    <div></div>
    <Heading>{bio1}</Heading>
    <Heading>{bio2}</Heading>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;

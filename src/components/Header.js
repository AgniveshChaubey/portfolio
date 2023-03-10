import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:agniveshvapi@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/AgniveshChaubey",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/agniveshchaubey/",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/agnivesh_01",
  },
  {
    icon: faInstagram,
    url: "https://instagram.com/agnivesh.chaubey"
  },
];


const useScroll = () => {
  const [scrollUp, setScrollUp] = useState(true);
  const prevScroll = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;
      let isScrollUp = prevScroll.current > window.pageYOffset;
      scroll === 0 ? isScrollUp = true : isScrollUp
      setScrollUp(isScrollUp)
      console.log(prevScroll.current > window.pageYOffset);
      prevScroll.current = window.pageYOffset;
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })
  return { scrollUp }
}


const Header = () => {
  const { scrollUp } = useScroll();

  useEffect(() => {
    console.log(scrollUp)
  }, [scrollUp])

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      zIndex={1}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="black"
      maxWidth="auto"
    >
      <Box color="white" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={4}>
              {
                socials.map(social => (
                  <a className="zoom" key={social.url} href={social.url} target='_blank'>
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                ))
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a className="zoom" href="#projects" onClick={handleClick("projects")}>Projects</a>
              <a className="zoom" href="#contact-me" onClick={handleClick("contactme")}>About Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

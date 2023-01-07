import { Divider, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Card.css';
import { useDisclosure } from "@chakra-ui/react";

const Card = ({ title, description, imageSrc, link }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to

  return (
    <>
      <VStack
      _hover={{ backgroundColor : '#D0D0D0', transition: 'all .2s ease-in-out',  transform: 'scale(1.05)', borderWidth: '2px', borderColor : 'black'}}
      borderRadius={10}
      overflow="hidden"
      background="#ffff"
      color="black"
      >
        <Image src={imageSrc} />
        <VStack padding={6} alignItems="start">
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <HStack>
            <Link href={link}>
              <Text>See more <FontAwesomeIcon icon={faArrowRight} size='1x' />
              </Text>
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default Card;

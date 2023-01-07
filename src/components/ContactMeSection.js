import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid email address"),
      comment: Yup.string().required("Required").min(25, "Must be at least 25 characters")
    }),
    onSubmit: (values) => {
      submit("", values);
    },
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message)
    }
  }, [response])

  return (
    <Box  maxWidth="auto">
    <FullScreenSection
      isDarkBackground
      backgroundColor="#8F6625"
      py={16}
      spacing={8}
    >
      <VStack w="auto" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          About me
        </Heading>
        <Box p={6} rounded="md">
        <VStack spacing={4}>
        <Heading fontSize={20}>Education</Heading>
        </VStack>
        </Box>
      </VStack>
    </FullScreenSection>
    </Box>
  );
};

export default LandingSection;

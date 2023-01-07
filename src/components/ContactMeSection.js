import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
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
    <Box maxWidth="auto">
      <FullScreenSection
        isDarkBackground
        backgroundColor="#8F6625"
        py={16}
        spacing={8}
      >
        <HStack>
          <Heading id="contactme-section" textAlign='left'>About me</Heading>
        </HStack>
        <HStack>
          <Box
            display="grid"
            gridTemplateColumns="repeat(2,minmax(0,1fr))"
            gridGap={8}
          >
            <VStack w="auto" p={1} alignItems="flex-start">
              <Box p={6} rounded="md">
                <VStack spacing={4}>
                  <Heading fontSize={20}> College
                    <p style={{ fontSize: '15px' }}>Electrical Engineering </p>
                    <p style={{ fontSize: '15px' }}>Birla Vishwakarma Mahavidyalaya</p>
                    <p style={{ fontSize: '15px' }}>V.V.N, Anand-388120.</p>
                  </Heading>
                </VStack>
              </Box>
            </VStack>
            <VStack w="auto" p={2} alignItems="flex-start">
              <Box p={6} rounded="md">
                <VStack spacing={4}>
                  <Heading fontSize={20}>Schooling
                    <p style={{ fontSize: '15px' }}>12th Science (PCM)</p>
                    <p style={{ fontSize: '15px' }}>Upasana Lions English School </p>
                    <p style={{ fontSize: '15px' }}>Gunjan, Vapi-396191.</p>
                  </Heading>
                </VStack>
              </Box>
            </VStack>
            <VStack w="auto" p={1} alignItems="flex-start">
              <Box p={6} rounded="md">
                <VStack spacing={4}>
                  <Heading fontSize={20}> Sports Achievement
                    <p style={{ fontSize: '15px' }}>State level Kabaddi Player</p>
                    <p style={{ fontSize: '15px' }}>(SGFI, Khel Mahakumbh)</p>
                    <p style={{ fontSize: '15px' }}>District level Chess Player</p>
                  </Heading>
                </VStack>
              </Box>
            </VStack>
            <VStack w="auto" p={2} alignItems="flex-start">
              <Box p={6} rounded="md">
                <VStack spacing={4}>
                  <Heading fontSize={20}>Academic Achievements
                    <p style={{ fontSize: '15px' }}>Gita Championship League Winner</p>
                    <p style={{ fontSize: '15px' }}>(Academic year 2016-17)</p>
                    <p style={{ fontSize: '15px' }}>SSC taluka topper.</p>
                  </Heading>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </HStack>

      </FullScreenSection>
    </Box>
  );
};

export default LandingSection;

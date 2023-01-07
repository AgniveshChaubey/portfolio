<form onSubmit={formik.handleSubmit}>
  <VStack spacing={4}>
    <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
      <FormLabel htmlFor="firstName">Name</FormLabel>
      <Input
        id="firstName"
        name="firstName"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
    </FormControl>
    <FormControl isInvalid={formik.touched.email && formik.errors.email}>
      <FormLabel htmlFor="email">Email Address</FormLabel>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <FormErrorMessage>formik.errors.email</FormErrorMessage>
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="type">Type of enquiry</FormLabel>
      <Select id="type" name="type"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.type}
      >
        <option value="hireMe">Freelance project proposal</option>
        <option value="openSource">
          Open source consultancy session
        </option>
        <option value="other">Other</option>
      </Select>
    </FormControl>
    <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
      <FormLabel htmlFor="comment">Your message</FormLabel>
      <Textarea
        id="comment"
        name="comment"
        height={250}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.comment}
      />
      <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
    </FormControl>
    <Button isLoading={isLoading} type="submit" colorScheme="purple" width="full">
      Submit
    </Button>
  </VStack>
</form>
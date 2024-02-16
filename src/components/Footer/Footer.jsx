import { Box, Button, Divider, Flex, Image, Input, Radio } from "@chakra-ui/react";
import Avatar from "../../assets/avatar.png";
import { Field, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  company: yup.string(),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
});

const Footer = () => {
  const handleSubmit = async (values) => {
    try {
      await axios.post(
        "https://webhook.site/c6f501f8-d666-4cf7-9bd5-27ea65d900bf",
        values
      );
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <Flex flexDirection="column" bg="black" p="52px 120px 60px 120px">
      <Divider bg="white" h="2px" />

      <form onSubmit={formik.handleSubmit}>
        <Flex m="50px 0 36px 0">
          <Box w="33%" fontSize="48px" fontWeight="600" color="white">
            Let's discuss how we can assist you better
          </Box>
          <Flex flexDirection="column" gap="12px" ml="200px" mr="30px">
            <Input
              variant="unstyled"
              placeholder="Name*"
              fontSize="16px"
              color="white"
              w="370px"
              h="30px"
              bg="transparent"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            )}

            <Input
              variant="unstyled"
              placeholder="Company"
              fontSize="16px"
              color="white"
              w="370px"
              h="30px"
              bg="transparent"
              {...formik.getFieldProps("company")}
            />

            <Input
              variant="unstyled"
              placeholder="E-mail*"
              fontSize="16px"
              color="white"
              w="370px"
              h="30px"
              bg="transparent"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            )}

            <Input
              variant="unstyled"
              placeholder="Phone number*"
              fontSize="16px"
              color="white"
              w="370px"
              h="30px"
              bg="transparent"
              {...formik.getFieldProps("phoneNumber")}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div>
            )}
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image
              src={Avatar}
              w="80px"
              h="80px"
              border="5px solid"
              borderColor="#02BA95"
              borderRadius="50%"
            />
            <Button
              bg="transparent"
              border="4px solid"
              borderColor="#02BA95"
              borderRadius="100px"
              w="170px"
              color="white"
              fontSize="16px"
              fontWeight="bold"
              h="49px"
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </Flex>
      </form>
      <Divider bg="white" h="2px" />
    </Flex>
  );
};

export default Footer;

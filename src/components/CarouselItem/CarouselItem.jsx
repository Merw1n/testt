import { Box, Flex, Text } from "@chakra-ui/react";

const CarouselItem = () => {
  return (
    <Flex
      flexDirection="column"
      w="770px"
      h="570px"
      p="30px 45px 95px 45px"
      border="2px solid"
      borderColor="#02BA95"
      borderRadius="10px"
      sx={{
        background:
          "radial-gradient(97.27% 190.65% at 2.73% 3.73%, rgba(2, 186, 149, 0.158) 0%, rgba(0, 255, 163, 0) 100%)",
      }}
      gap="20px"
      mt="40px"
      minW="770px"
    >
      <Text color="#00FFA3" fontSize="18px" fontStyle="italic" fontWeight="500">
        We utilize a distinct set of tools based on your specific requirements
      </Text>
      <Flex justifyContent="space-between">
        <Text
          color="#00FFA3"
          fontSize="40px"
          fontWeight="bold"
          fontStyle="italic"
        >
          Tools
        </Text>
        <Text color="white" fontSize="40px" fontWeight="bold">
          CAWI
        </Text>
      </Flex>
      <Box fontWeight="500" fontSize="28px" textAlign="left" mt="100px" color="white">
        Computer-Assisted Web Interviewing is a vital tool in our arsenal,
        allowing us to conduct surveys and collect data through online platforms
        with the assistance of specialized software, ensuring efficient and
        accurate data collection for our clients' market research needs
      </Box>
    </Flex>
  );
};

export default CarouselItem;

import { Flex, Text } from "@chakra-ui/react";
import { LogosSection } from "../LogosSection";

const CompanySection = () => {
  return (
    <Flex flexDirection="column" gap="60px" alignItems="center" padding="60px 0 56px 0">
      <Text fontWeight="bold" fontSize="40px" color="white">
        We are honored to contribute to your success
      </Text>
      <LogosSection />
      <Text fontWeight="500" fontSize="40px" color="white" padding="0 135px" textAlign="center">
        We customize and combine tools and services based on your business's
        purpose and objectives to deliver tailored results
      </Text>
    </Flex>
    
  );
};

export default CompanySection;

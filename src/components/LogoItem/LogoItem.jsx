import { Flex, Image } from "@chakra-ui/react";

const LogoItem = ({ image, position }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minWidth="370px"
      minHeight="370px"
      height="370px"
      border="2px solid"
      borderColor="#02BA95"
      borderRadius="50%"
      position="relative"
      transform={`translate(${position}px)`}
    >
      <Image src={image} />
    </Flex>
  );
};

export default LogoItem;

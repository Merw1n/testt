import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import CarouselItem from "../CarouselItem/CarouselItem";

const CarouselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Flex
      flexDirection="column"
      gap="20px"
      alignItems="flex-start"
      padding="60px 0 56px 0"
    >
      <Flex
        flexDirection="column"
        gap="20px"
        alignItems="flex-start"
        padding="0 135px"
      >
        <Text fontWeight="bold" fontSize="40px" color="white">
          Comprehensive research
        </Text>
        <Text fontWeight="500" fontSize="40px" color="#02BA95">
          Empower your decision-making, providing a competitive edge in a
          data-centric market.
        </Text>
        <UnorderedList
          fontWeight="500"
          fontSize="28px"
          color="white"
          paddingLeft="10px"
        >
          <ListItem>
            Qualitative research is a collecting and analyzing non-numerical
            data to understand concepts, opinions, or experiences
          </ListItem>
          <ListItem>
            Quantitative research methods is an objective measurement and
            numerical analysis of data collected through polls, questionnaires,
            and surveys
          </ListItem>
        </UnorderedList>
      </Flex>

      <Flex overflow="hidden" gap="30px" position="relative" ml="135px" w="90%">
        <CarouselItem />
        <CarouselItem />
      </Flex>
    </Flex>
  );
};

export default CarouselSection;

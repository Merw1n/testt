import { Flex } from "@chakra-ui/react";
import { LOGO_ITEMS } from "../../constantas/LogoItems";
import {LogoItem} from "../LogoItem"

const LogosSection = () => {
  return (
    <Flex height="400px" overflow="hidden" position="relative" w="100%">
      {LOGO_ITEMS.map((logo, index) => {
        return (
          <LogoItem
            image={logo.image}
            key={logo.name}
            position={-200 - index * 50}
          />
        );
      })}
    </Flex>
  );
};

export default LogosSection;

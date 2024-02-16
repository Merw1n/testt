import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Box,
  Text,
  VStack,
  List,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";

const MultiSelect = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [options, setOptions] = useState(data);

  const handleToggle = (item) => {
    const isSelected = selectedItems.includes(item.id);

    if (isSelected) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item.id));
    } else {
      setSelectedItems([...selectedItems, item.id]);
    }
  };

  const renderOptions = (items) => {
    return (
      <List styleType="none" ml={4}>
        {items.map((item) => (
          <ListItem key={item.id}>
            <Checkbox
              isChecked={selectedItems.includes(item.id)}
              onChange={() => handleToggle(item)}
            >
              {item.name}
            </Checkbox>
            {item.children && renderOptions(item.children)}
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <VStack align="flex-start" spacing={4} color="white">
      <Text fontSize="xl" fontWeight="bold">
        Multi-Select Component
      </Text>
      <Box>
        {renderOptions(options)}
        <Box mt={4}>
          <Text fontSize="lg" fontWeight="bold">
            Selected Items:
          </Text>
          <OrderedList>
            {selectedItems.map((itemId) => (
              <ListItem key={itemId}>
                {options.find((item) => item.id === itemId)?.name}
              </ListItem>
            ))}
          </OrderedList>
        </Box>
      </Box>
    </VStack>
  );
};

export default MultiSelect;

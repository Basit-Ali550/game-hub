import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const SortSelector = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release Date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average rating",
    },
  ];
  const currentSortOrder = SortSelector.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSortOrder?.label || " Relevance"}
      </MenuButton>
      <MenuList>
        {SortSelector.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.label}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SeacrchInput from "./SeacrchInput";
const Navbar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <SeacrchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

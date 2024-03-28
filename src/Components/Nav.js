import { Box, Image, Text } from "@chakra-ui/react";
import prfLogo from "../assets/prfLogo.png";

export default function Nav() {
  return (
    <Box
      position="fixed"
      top="0"
      height="10vh"
      bgColor="rgba(255, 255, 255, 0.5)"
      width="100%"
      display="flex"
      padding={{
        base: "6px",
        md: "10px",
        lg: "14px",
      }}
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid gray.100"
      boxShadow="sm"
      zIndex="1"
    >
      <Text fontSize={{ base: "sm", md: "md" , lg:"lg" }} fontWeight="bold" pl="20px" >Logo</Text>
      <Image src={prfLogo} alt="prfLogo"  pr="20px"/>
    </Box>
  );
}

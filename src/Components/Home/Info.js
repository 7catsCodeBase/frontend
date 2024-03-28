import { Box, Text } from "@chakra-ui/react";
export default function Info() {
  return (
    <Box mb="5vh" margin="0 auto" maxW="700px" mt="5vh" p="4">
      <Text fontSize={{ base: "sm", md: "md", lg: "md" }} fontWeight="600" textAlign="center">
        Instantly book world class audio engineers and recording studios
      </Text>
      <Text fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }} fontWeight="bold" mb="2vh">
        Come and explore our world with us
      </Text>
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} fontWeight="bold">
        You can avail a instant access to our portal. You can avail a instant
        access to our portal, You can avail a instant access to our portal
      </Text>
    </Box>
  );
}

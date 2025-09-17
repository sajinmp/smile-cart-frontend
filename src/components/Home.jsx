import { Flex, Box, Heading, Separator } from "@chakra-ui/react";

const Home = () => (
  <Flex align="center" direction="column" justify="center">
    <Box m={2}>
      <Heading as="h1" fontWeight="semibold" mb={2} mt={6} mx={6} size="2xl">
        Smile Cart
      </Heading>
      <Separator borderColor="black" size="sm" />
    </Box>
    <Heading as="h2" mx="auto" size="xl">
      Home
    </Heading>
  </Flex>
);

export default Home;

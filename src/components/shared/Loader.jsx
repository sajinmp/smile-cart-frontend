import { Spinner, Flex } from "@chakra-ui/react";

const Loader = () => (
  <Flex align="center" height="100vh" justify="center">
    <Spinner color="teal.500" emptyColor="gray.200" size="xl" />
  </Flex>
);

export default Loader;

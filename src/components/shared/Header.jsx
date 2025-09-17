import { Box, Flex, Text } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Header = ({ title, showBackButton }) => {
  const history = useHistory();

  return (
    <Box>
      <Flex align="center" mb={4}>
        {showBackButton && (
          <Box
            _hover={{ bg: "gray.400", cursor: "pointer" }}
            as={FiArrowLeft}
            borderRadius="full"
            boxSize="3em"
            mr={6}
            p={2}
            onClick={history.goBack}
          />
        )}
        <Text fontSize="4xl" fontWeight="semibold">
          {title}
        </Text>
        <Box bg="black" height="2px" mb={6} />
      </Flex>
    </Box>
  );
};

export default Header;

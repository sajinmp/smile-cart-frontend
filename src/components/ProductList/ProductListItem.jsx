import { Flex, Text, Image, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ProductListItem = ({ image_url, name, offer_price, slug }) => (
  <ChakraLink
    as={RouterLink}
    borderColor="black"
    borderRadius="md"
    borderWidth="1px"
    mb={10}
    p={4}
    to={`/product/${slug}`}
    w="48"
  >
    <Flex
      alignItems="center"
      direction="column"
      h="100%"
      justify="space-between"
    >
      <Image
        alt={name}
        boxSize="50px"
        mb={4}
        objectFit="cover"
        src={image_url}
      />
      <Text fontWeight="semibold" mt={2} textAlign="center">
        {name}
      </Text>
      <Text>{offer_price}</Text>
    </Flex>
  </ChakraLink>
);

export default ProductListItem;

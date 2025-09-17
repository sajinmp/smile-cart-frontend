import { useState, useEffect } from "react";

import {
  Spinner,
  Flex,
  SimpleGrid,
  Separator,
  Heading,
  Box,
} from "@chakra-ui/react";
import productsApi from "apis/products";

import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const products = await productsApi.index();
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Flex align="center" height="100vh" justify="center">
        <Spinner color="teal.500" emptyColor="gray.200" size="xl" />
      </Flex>
    );
  }

  return (
    <Flex direction="column" m={2}>
      <Box>
        <Heading as="h1" size="4xl">
          Shopping Mall
        </Heading>
        <Separator borderColor="black" size="sm" />
      </Box>
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4 }}
        justifyItems="center"
        p={4}
        spacingY={8}
      >
        {(products.products || []).map(product => (
          <ProductListItem key={product.slug} {...product} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductList;

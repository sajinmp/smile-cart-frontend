import { useState, useEffect } from "react";

import { Spinner, Box, Text, Flex, Stack } from "@chakra-ui/react";
import axios from "axios";

import { API_URL } from "../../constants";
import Carousel from "../shared/Carousel";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${API_URL}/products/infinix-inbook-2`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <Flex align="center" height="100vh" justify="center">
        <Spinner color="teal.500" emptyColor="gray.200" size="xl" />
      </Flex>
    );
  }

  if (!product) {
    return (
      <Flex align="center" height="100vh" justify="center">
        <Text>No product data available.</Text>
      </Flex>
    );
  }

  const discount = ((product?.mrp - product?.offer_price) / product?.mrp) * 100;
  const discountPercent = discount.toFixed();
  const imageUrls = [...(product?.image_urls || []), product?.image_url];

  return (
    <Box p={6}>
      <Box mb={6}>
        <Text fontSize="4xl" fontWeight="semibold" mb={2}>
          {product?.name}
        </Text>
        <Box bg="black" height="2px" mb={6} />
      </Box>
      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        <Box flex="2">
          <Carousel imageUrls={imageUrls} title={product?.name} />
        </Box>
        <Stack flex="3" spacing={4}>
          <Text>{product?.description}</Text>
          <Text>MRP: {product?.mrp}</Text>
          <Text fontWeight="semibold">Offer price: {product?.offer_price}</Text>
          <Text color="green.600" fontWeight="semibold">
            {discountPercent}% off
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Product;

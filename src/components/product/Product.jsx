import { useState, useEffect } from "react";

import { Spinner, Box, Text, Flex, Stack } from "@chakra-ui/react";
import productsApi from "apis/products";
import { FiArrowLeft } from "react-icons/fi";
import { useParams, useHistory } from "react-router-dom";

import Carousel from "./Carousel";

import PageNotFound from "../PageNotFound";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const { slug } = useParams();

  const fetchProduct = async () => {
    try {
      const product = await productsApi.show(slug);
      setProduct(product);
    } catch {
      setIsError(true);
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

  if (isError) return <PageNotFound />;

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
        <Flex align="center" mb={4}>
          <Box
            _hover={{ bg: "gray.400", cursor: "pointer" }}
            as={FiArrowLeft}
            borderRadius="full"
            boxSize="3em"
            mb={2}
            mr={6}
            p={2}
            onClick={history.goBack}
          />
          <Text fontSize="4xl" fontWeight="semibold" mb={2}>
            {product?.name}
          </Text>
          <Box bg="black" height="2px" mb={6} />
        </Flex>
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

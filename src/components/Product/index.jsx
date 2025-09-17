import { useState, useEffect } from "react";

import { Box, Text, Flex, Stack, Separator } from "@chakra-ui/react";
import productsApi from "apis/products";
import { Header, Loader } from "components/shared";
import { useParams } from "react-router-dom";

import Carousel from "./Carousel";

import PageNotFound from "../shared/PageNotFound";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
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

    fetchProduct();
  }, [slug]);

  if (loading) return <Loader />;

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
      <Header showBackButton title={product?.name} />
      <Separator borderColor="black" mb={5} />
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

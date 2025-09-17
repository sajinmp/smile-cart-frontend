import { useState, useEffect } from "react";

import { Flex, SimpleGrid, Separator } from "@chakra-ui/react";
import productsApi from "apis/products";
import Header from "components/shared/Header";
import Loader from "components/shared/Loader";

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

  if (loading) return <Loader />;

  return (
    <Flex direction="column" m={2}>
      <Header showBackButton={false} title="Products" />
      <Separator borderColor="black" mb={5} />
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

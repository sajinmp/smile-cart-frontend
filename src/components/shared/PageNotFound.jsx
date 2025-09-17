import { EmptyState, VStack } from "@chakra-ui/react";
import { HiColorSwatch } from "react-icons/hi";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <EmptyState.Root>
    <EmptyState.Content>
      <EmptyState.Indicator>
        <HiColorSwatch />
      </EmptyState.Indicator>
      <VStack textAlign="center">
        <EmptyState.Title>
          The page you are looking for cannot be found.
        </EmptyState.Title>
        <EmptyState.Description mt={10}>
          <Link style={{ color: "blue" }} to="/">
            Back to Home
          </Link>
        </EmptyState.Description>
      </VStack>
    </EmptyState.Content>
  </EmptyState.Root>
);

export default PageNotFound;

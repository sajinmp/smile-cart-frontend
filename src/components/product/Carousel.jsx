import { useEffect, useRef, useState } from "react";

import { IconButton, Box, Flex, Image } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Carousel = ({ imageUrls, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(handleNext, 3000);

    return () => clearInterval(timerRef.current);
  });

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(handleNext, 3000);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? imageUrls.length - 1 : currentIndex - 1
    );
    resetTimer();
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === imageUrls.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <Flex align="center" direction="column">
      <Flex align="center" gap={4}>
        <IconButton
          aria-label="Previous"
          variant="ghost"
          onClick={handlePrevious}
        >
          <LuChevronLeft />
        </IconButton>
        <Image
          alt={title}
          boxSize="56"
          objectFit="cover"
          src={imageUrls[currentIndex]}
        />
        <IconButton
          aria-label="Next"
          variant="ghost"
          onClick={() => {
            handleNext();
            resetTimer();
          }}
        >
          <LuChevronRight />
        </IconButton>
      </Flex>
      <Flex gap={1} mt={2}>
        {imageUrls.map((_, index) => (
          <Box
            bg={index === currentIndex ? "black" : "transparent"}
            border="1px solid black"
            borderRadius="full"
            boxSize={3}
            cursor="pointer"
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              resetTimer();
            }}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Carousel;

import { useEffect, useRef, useState } from "react";

import { Left, Right } from "neetoicons";
import { Button } from "neetoui";

const Carousel = ({ imageUrls, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(handleNext, 3000);

    return () => clearInterval(timerRef.current);
  });

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
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
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-4">
        <Button
          className="shrink-0 focus-within:ring-0 hover:bg-transparent"
          icon={Left}
          style="text"
          onClick={handlePrevious}
        />
        <img
          alt={title}
          className="max-w-56 h-56 max-h-56 w-56"
          src={imageUrls[currentIndex]}
        />
        <Button
          className="shrink-0 focus-within:ring-0 hover:bg-transparent"
          icon={Right}
          style="text"
          onClick={() => {
            handleNext();
            resetTimer();
          }}
        />
      </div>
      <div className="flex space-x-1">
        {imageUrls.map((_, index) => {
          const defaultClasses =
            "neeto-ui-border-black neeto-ui-rounded-full h-3 w-3 cursor-pointer border";

          const dotClassNames =
            index === currentIndex
              ? defaultClasses.concat(" neeto-ui-bg-black")
              : defaultClasses;

          return (
            <span
              className={dotClassNames}
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                resetTimer();
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

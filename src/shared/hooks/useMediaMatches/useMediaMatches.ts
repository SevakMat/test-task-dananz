import { useCallback, useEffect, useState } from "react";

const useMediaMatches = (maxWidth: number): boolean => {
  const [isMatches, setIsMatches] = useState<boolean>(false);

  const handleOnResize = useCallback((): void => {
    setIsMatches(maxWidth > window.innerWidth);
  }, [maxWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleOnResize);

    return () => {
      window.removeEventListener("resize", handleOnResize);
    };
  }, [handleOnResize]);

  return isMatches;
};

export default useMediaMatches;

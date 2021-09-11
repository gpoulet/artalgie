import { PropsWithChildren, ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: PropsWithChildren<unknown>): ReactElement => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>
};

export default ScrollToTop;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import PageLoader from "./PageLoader";

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      <div className={loading ? "opacity-0" : ""}>{children}</div>
    </>
  );
};

export default PageWrapper;

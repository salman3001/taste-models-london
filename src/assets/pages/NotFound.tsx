import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="text-primary text-center pt-16  text-xl">
      Oops! the page your looking for is under maintenance <br />
      <span className="animate-pulse duration-500">
        Redirecting to home page
      </span>
    </div>
  );
};

import { useEffect, useState } from "react";

// status type 
type StatusType = "idle" | "pending" | "success" | "error";

const useAPI = <T>(asyncService: () => Promise<T>) => {
  // state
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStaus] = useState<StatusType>("idle");

  // useEffect
  useEffect(() => {
    setStaus("pending");
    setError(null);
    asyncService()
      .then((data) => {
        setData(data);
        setStaus("success");
      }).catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  // return
  return {
    data,
    isLoading: status === "pending",
    isSuccess: status === "success",
    error,
  };
};

export default useAPI;
import {
  useCallback,
  useEffect,
  useState,
} from "react";

function useAsync(
  asyncFunction,
  immediate = true
) {

  const [data, setData] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const execute =
    useCallback(
      async (...params) => {

        try {

          setLoading(true);

          setError("");

          const response =
            await asyncFunction(
              ...params
            );

          setData(response);

          return response;

        } catch (err) {

          setError(
            err.message ||
              "Something went wrong"
          );

        } finally {

          setLoading(false);
        }
      },
      [asyncFunction]
    );

  useEffect(() => {

    if (immediate) {

      execute();
    }

  }, [execute, immediate]);

  return {

    data,

    setData,

    loading,

    error,

    execute,
  };
}

export default useAsync;
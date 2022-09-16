import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useGot = (path) => {
  const { data, error } = useSWR(
    `https://www.anapioficeandfire.com/api${path}`,
    fetcher,
  );

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export { useGot };

import useSWR from "swr";
import adminFetch from "../axiosBase/interceptors"; // your axios instance

// Define the type for the data you expect from the API response
export const useFetch = <T>(url: string) => {
  // Create a fetcher function that SWR can use
  const fetcher = async (url: string): Promise<T> => {
    try {
      const response = await adminFetch.get(url);
      return response.data; // Ensure that the response is typed correctly
    } catch (error) {
      throw error; // propagate error to SWR
    }
  };

  // Use SWR hook, passing in the URL and the fetcher
  const { data, error, isValidating } = useSWR<T>(url, fetcher);

  return {
    data,
    loading: isValidating, // 'isValidating' is true while the request is being made
    error,
  };
};

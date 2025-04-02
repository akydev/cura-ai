import useSWR from "swr";
import adminFetch from "../axiosBase/interceptors"; // your axios instance
import { useToast } from "../context/ToastProvider";

// Define the type for the data you expect from the API response
export const useFetch = <T>(url?: string | null) => {
  const toast = useToast();
  // Create a fetcher function that SWR can use
  const fetcher = async (url: string): Promise<T> => {
    try {
      const response = await adminFetch.get(url);
      return response.data; // Ensure that the response is typed correctly
    } catch (error: any) {
      toast.error(error.response?.data.msg || error.message);
      throw error; // propagate error to SWR
    }
  };

  // Use SWR hook, passing in the URL and the fetcher
  const { data, error, isValidating } = useSWR<T>(url || null, fetcher, {
    errorRetryCount: 0, // Disable retries on error
    revalidateOnFocus: false, // Optionally disable revalidation on window focus
  });

  return {
    data,
    loading: isValidating, // 'isValidating' is true while the request is being made
    error,
  };
};

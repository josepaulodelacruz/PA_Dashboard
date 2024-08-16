import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import client from '@/Config/client';

// Define the type for your mutation parameters
type MutationParams = {
  is_included: string;
  id: string;
};

// Define the type for the response data if needed
type ResponseData = any; // Replace with your actual response data type

const useIncludeProjectMutation = () =>
  useMutation<ResponseData, AxiosError, MutationParams>({
    mutationFn: async (params) => {
      const response = await client.get(`/get-projects/include?isIncluded=${params.is_included}&id=${params.id}`);
      return response.data;
    },
    onError: (error) => {
      console.error("Error:", error.message);
    },
  });

export default useIncludeProjectMutation;

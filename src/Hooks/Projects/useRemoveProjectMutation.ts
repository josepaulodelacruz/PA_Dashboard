import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import client from '@/Config/Client';

// Define the type for your mutation parameters
type MutationParams = {
  is_remove_from_list: string;
  id: number;
};

// Define the type for the response data if needed
type ResponseData = any; // Replace with your actual response data type

const useRemoveProjectMutation= () =>
  useMutation<ResponseData, AxiosError, MutationParams>({
    mutationFn: async (params) => {
      const response = await client.get(`/get-projects/remove?isRemoved=${params.is_remove_from_list}&id=${params.id}`);
      return response.data;
    },
    onError: (error) => {
      console.error("Error:", error.message);
    },
  });

export default useRemoveProjectMutation;

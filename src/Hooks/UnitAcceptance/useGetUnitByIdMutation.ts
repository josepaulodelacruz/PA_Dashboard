import { useMutation } from "react-query";
import { AxiosError } from "axios";
import client from '@/Config/client'

type MutationParams = { 
  id?: string
}

type ResponseData = any;




const useGetUnitByIdMutation = () =>
  useMutation<ResponseData, AxiosError, MutationParams>({
    mutationFn: async (params) => {
      const response = await client.get(`/PMDMTSv2/print/${params.id}`)
      return response.data
    },
    onError: (error) => {
      console.error("Error: ", error.message)
    }
  })


export default useGetUnitByIdMutation

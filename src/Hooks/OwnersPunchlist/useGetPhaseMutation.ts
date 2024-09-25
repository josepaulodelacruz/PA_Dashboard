import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import client from '@/Config/client'

type MutationParams = {
  project: string
} 

type ResponseData = any


const useGetPhaseMutation = () => {
  return useMutation<ResponseData, AxiosError, MutationParams>({
    mutationFn: async (params) => {
      const response = await client.get(`/PMDMTSv2/get-phase?project=${params.project}`) 

      return response.data
    },
    onError: (error) => {
      console.error("Errror: ", error.message)
    },

  })
}

export default useGetPhaseMutation

import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import client from '@/Config/client'

type MutationParams = {
  id: string,
}

type ResponseData = any

const useDeactivatePersonelMutation = () => 
  useMutation<ResponseData, AxiosError, MutationParams>({
    mutationFn: async (params) => {
      const response = await client.get(`/PMDMTSv2/setup/personel-assignment/get-projects/related-personels/deactivate/${params.id}`)

      return response.data
    },
    onError: (error) => {
      console.error("Error: ", error.message)
    },
  })

export default useDeactivatePersonelMutation

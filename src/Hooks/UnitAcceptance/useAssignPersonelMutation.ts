import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import client from '@/Config/client'

type MutationParams = {
  id: string,
  project: string,
  contact_person: string,
  job_role: string
  is_active: string
}

type ResponseData = any

const useAssignPersonelMutation = () => 
  useMutation<ResponseData, AxiosError, MutationParams>({
    mutationFn: async (params) => {
      const personel = params
      const response = await client.post('/PMDMTSv2/setup/personel-assignment/get-projects/related-personels/assign', personel)

      return response.data
    },
    onError: (error) => {
      console.error("Error: ", error.message)
    }
  })

export default useAssignPersonelMutation

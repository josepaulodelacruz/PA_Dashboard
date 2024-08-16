import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import client from '@/Config/Client'

type ResponseData = any

interface MutationParams {
  id: number
  action: string
}

const useViewProjectMutation = () =>
  useMutation<ResponseData, AxiosError, MutationParams>({
    mutationFn: (params: MutationParams) => {
      return client.get(`/get-projects/${params.id}/${params.action}`)
    },
    onSuccess: (response) => {
      return response
    },
    onError: (error) => {
      console.error(error)
    }
  })

export default useViewProjectMutation

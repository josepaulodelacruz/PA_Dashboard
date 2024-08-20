import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import client from '@/Config/client'

type ResponseData = any

type MutationParams = {
  id: string,
  model_id: string,
  house_type: string,
  isNotApplicable: string[],
  isApplicable: string[]
}


const useSaveModelChecklistMutation = () => {
  return useMutation<ResponseData, AxiosError, MutationParams>({
    mutationFn: async (body) => {
      const response = await client.post(`/get-projects/${body.id}/view-model-checklist/save`, body)

      return response.data
    },
    onError: (error) => {
      console.error(error)
    }

  })
}

export default useSaveModelChecklistMutation

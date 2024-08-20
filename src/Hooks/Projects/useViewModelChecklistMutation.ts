import { useMutation } from "react-query";
import { AxiosError } from "axios";
import client from '@/Config/client'

type MutationParams = { 
  id: number,
  model_id: string
}


type ResponseData = any

const useViewModelChecklist = () => {

  return useMutation<ResponseData, AxiosError, MutationParams>({
    mutationFn: async (params) => {
      const response = await client.get(`/get-projects/${params.id}/view-model-checklist?modelId=${params.model_id}`)

      return response.data
    },
    onError: (error) => {
      console.error("Error: ", error.message)
    }
  })
}

export default useViewModelChecklist


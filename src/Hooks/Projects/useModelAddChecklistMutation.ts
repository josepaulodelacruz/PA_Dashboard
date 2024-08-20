import { useMutation } from "react-query";
import { AxiosError } from "axios";
import client from '@/Config/client'

type MutationParams = {
  id: number,
  model_id: string,
  housetype: string,
}

type ResponseData = any;

const useModelAddChecklistMutation = () => {
  return useMutation<ResponseData, AxiosError, MutationParams>({
    mutationFn: async (params) => {
      const response = await client.post(`/get-projects/${params.id}/view-model-checklist/add?modelId=${params.model_id}&housetype=${params.housetype}`, {})
      return response.data;
    },
    onError: (error) => {
      console.error(error)
    }
  })
}

export default useModelAddChecklistMutation


import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import client from '@/Config/client'

type MutationParams = {
  title: string
}

type ResponseData = {
  errorMessage: string,
  status: boolean,
  data: Array<{ noah_system: string, project_name: string, contact_person: string, contact_no: string, contact_email: string, job_role: string }>
};


const useViewRelatedPersonelMutation = () =>
  useMutation<ResponseData, AxiosError, MutationParams>({
    mutationFn: async (params) => {
      const response = await client.get(`/PMDMTSv2/setup/personel-assignment/get-projects/related-personels/${params.title}`)

      return response.data;
    },
    onError: (error) => {
      console.error("Error: ", error.message);
    }
  })

export default useViewRelatedPersonelMutation



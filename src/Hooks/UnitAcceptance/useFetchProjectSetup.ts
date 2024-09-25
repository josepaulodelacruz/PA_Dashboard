import { useQuery } from 'react-query'
import client from '@/Config/client'

interface ProjectResponse {
  errorMessage: string,
  status: boolean,
  data: Array<{ project_name: string }>

}


const useFetchProjectSetup = () => {

  return useQuery({
    queryKey: ['project-setup'],
    queryFn: () => client.get('/PMDMTSv2/setup/personel-assignment/get-projects'),
    select: (response) => {
      const body = response.data as ProjectResponse
      return body;
    },
    onSuccess: () => {

    },
    enabled: true,
    cacheTime: 0,
    staleTime: 0

  })

}

export default useFetchProjectSetup

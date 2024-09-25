import { useQuery } from 'react-query'
import client from '@/Config/client'

interface ProjectResponse {
  errorMessage: string,
  status: boolean,
  data: Array<{ name: string }>,

}

const useFetchOwnersProject = () => {

  return useQuery({
    queryKey: ['owners-projects'],
    queryFn: () => client.get('/PMDMTSv2/get-projects'),
    select: (response) => {
      const body = response.data as ProjectResponse

      return body
    },
    enabled: true
  })

}

export default useFetchOwnersProject


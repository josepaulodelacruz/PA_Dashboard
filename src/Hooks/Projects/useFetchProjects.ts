import { useQuery } from "react-query";
import client from '@/Config/client'
import { Project } from "@/Types";

interface ProjectResponse {
  errorMessage: string,
  status: boolean,
  data: Project[]
}

const useFetchProjects = () => {
  //const queryClient = useQueryClient()

  return useQuery({
    queryKey: ['projects'],
    queryFn: () => client.get('/get-projects'),
    select: (response) => {
      const body = response.data as ProjectResponse
      return body;
    },
    onSuccess: () => {
      //queryClient.invalidateQueries(['projectsOnlyAdded'])
    },
    enabled: true,
    //cacheTime: 0,
    //staleTime: 0
  })
}

export default useFetchProjects 

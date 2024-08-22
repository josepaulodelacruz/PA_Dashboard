import { useQuery, useQueryClient } from "react-query";
import client from '@/Config/client'
import { Project } from "@/Types";

interface ProjectResponse {
  errorMessage: string,
  status: boolean,
  data: Project[]
}

const useFetchProjectsOnlyAdded = () => {
  const queryClient = useQueryClient()
  return useQuery({
    queryKey: ['projectsOnlyAdded'],
    queryFn: () => client.get('/get-projects?onlyAddedProjects=' + true),
    select: (response) => {
      const body = response.data as ProjectResponse
      return body;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['projects'])
    },
    enabled: true,
    cacheTime: 0,
    staleTime: 0
  })

}

export default useFetchProjectsOnlyAdded

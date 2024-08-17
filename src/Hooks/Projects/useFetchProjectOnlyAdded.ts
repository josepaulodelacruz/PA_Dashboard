import { useQuery } from "react-query";
import client from '@/Config/client'
import { Project } from "@/Types";

interface ProjectResponse {
  errorMessage: string,
  status: boolean,
  data: Project[]
}

const useFetchProjectsOnlyAdded = () =>
  useQuery({
    queryFn: () => client.get('/get-projects?onlyAddedProjects=' + true),
    select: (response) => {
      const body = response.data as ProjectResponse 
      return body; 
    },
    enabled: true,
    cacheTime: 0,
    staleTime: 0
  })

export default useFetchProjectsOnlyAdded

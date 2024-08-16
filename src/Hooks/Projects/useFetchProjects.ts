import { useQuery } from "react-query";
import client from '@/Config/client'
import { Project } from "@/Types";

interface ProjectResponse {
  errorMessage: string,
  status: boolean,
  data: Project[]
}

const useFetchProjects = (onlyAddedProjects: boolean = false) =>
  useQuery({
    queryFn: () => client.get('/get-projects?onlyAddedProjects=' + onlyAddedProjects),
    select: (response) => {
      const body = response.data as ProjectResponse 
      return body; 
    },
    enabled: true,
  })

export default useFetchProjects 

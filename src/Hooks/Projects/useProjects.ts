import { Project } from '@/Types'
import { create } from 'zustand'

interface ProjectsProps {
  data: Project[],
  isSet: (response: Project[]) => void
}

const useProjects = create<ProjectsProps>((set, get) => ({
  data: [],
  isSet: (response: Project[]) => {
    set({ data: response })
    console.log(get().data);
  }
})) 


export default useProjects



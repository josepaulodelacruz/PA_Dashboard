//import { AxiosError  } from "axios";
import { useQuery } from "react-query";
import client from '@/Config/client'

const useTestApi = () =>
  useQuery({
    queryFn: () => client.get('/api/auth'),
    select: (response) => {
      return response.data
    },
    enabled: false,
  })


export default useTestApi

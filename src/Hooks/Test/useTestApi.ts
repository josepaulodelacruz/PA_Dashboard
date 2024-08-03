//import { AxiosError  } from "axios";
import { useQuery } from "react-query";
import client from '@/config/client'

const useTestApi = () =>
  useQuery({
    queryFn: () => client.get('/WeatherForecast'),
    select: (response) => {
      return response.data
    },
    enabled: false,
  })


export default useTestApi

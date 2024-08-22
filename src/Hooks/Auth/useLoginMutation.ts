import client from "@/Config/client";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

type ResponseData = any

type MutationParams = {
  Username: string,
  Password: string
}

const useLoginMutation = () => {
  return useMutation<ResponseData, AxiosError, MutationParams>({
    mutationFn: async (params) => {
      const formData = new FormData();
      formData.append("Username", params.Username);
      formData.append("Password", params.Password)

      return client.post('/ldap/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    },
    onSuccess: (_) => {},
  });
};

export default useLoginMutation


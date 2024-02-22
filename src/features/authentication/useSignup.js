import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const {
    mutate: signup,
    isloading,
    error,
  } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success("Account successfuly created!");
    },
  });

  return { signup, isloading, error };
}

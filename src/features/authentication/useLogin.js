import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login as loginAPI } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user", data.user]);
      navigate("/", { replace: true });
      toast.success("You are successfully signed in");
    },
    onError: (err) => {
      console.log("ERROR", err.message);
      toast.error("Provided Email or Password are invalid.");
    },
  });

  return { login, isLoading };
}

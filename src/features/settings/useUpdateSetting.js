import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("setting successfully updated.");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: () => toast.error("something went wrong."),
  });
  return { isUpdating, updateSetting };
}

import { CreateWorkstreamDto } from "@/lib/services/api/Dto/Workstream/CreateWorkstreamDto";
import { createWorkstream } from "@/lib/services/api/workstream";
import { useMutation } from "@tanstack/vue-query";

export const useCreateWorkstream = () =>
  useMutation({
    mutationFn: async (params: CreateWorkstreamDto) => {
      return createWorkstream(params);
    },
  });

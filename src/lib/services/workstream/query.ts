import { listWorkstreams } from "@/lib/services/api/workstream";
import { Workstream } from "@/lib/services/workstream/models/workstream";
import { useQuery } from "@tanstack/vue-query";

export const useListWorkstreams = () =>
  useQuery<Workstream[]>({
    queryKey: ["workstreams"],
    queryFn: listWorkstreams,
  });

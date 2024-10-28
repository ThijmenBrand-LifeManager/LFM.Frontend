import { createWorkstreamApi } from "@/lib/services/api";
import { Workstream } from "@/lib/services/workstream/models/workstream";

export const listWorkstreams = async (): Promise<Workstream[]> => {
  const result = await createWorkstreamApi().get("/workstreams/list");
  return result.data;
};

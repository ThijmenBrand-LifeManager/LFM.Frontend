import { createWorkstreamApi } from "@/lib/services/api";
import { CreateWorkstreamDto } from "@/lib/services/api/Dto/Workstream/CreateWorkstreamDto";
import { Workstream } from "@/lib/services/workstream/models/workstream";

export const listWorkstreams = async (): Promise<Workstream[]> => {
  const result = await createWorkstreamApi().get("/workstreams/list");
  return result.data;
};

export const createWorkstream = async (
  params: CreateWorkstreamDto
): Promise<Workstream> => {
  const result = await createWorkstreamApi().post("/workstreams", params);
  return result.data;
};

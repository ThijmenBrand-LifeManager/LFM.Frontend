import { WorkstreamState } from "@/lib/models/workstream/WorkstreamState";

export interface CreateWorkstreamDto {
  name: string;
  description: string;
  startDate: Date;
  state: WorkstreamState;
}

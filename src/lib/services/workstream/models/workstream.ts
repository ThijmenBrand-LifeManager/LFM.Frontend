import { WorkstreamState } from "@/lib/models/workstream/WorkstreamState";

export type Workstream = {
  id: string;
  name: string;
  description: string;
  state: WorkstreamState;
  startDate: Date;
  createdAt: string;
};

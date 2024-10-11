import { Phase, Step } from "@prisma/client";

export type PhaseWithModels = Phase & {
    steps: Step[];
  };
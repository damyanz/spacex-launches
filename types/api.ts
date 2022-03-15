import { Launch } from "types/launch";

export interface LaunchesData {
  launches: Launch[];
}

export interface LaunchesVariables {
  offset: number;
  limit: number;
}

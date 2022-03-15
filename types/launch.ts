export interface Launch {
  id: string;
  launch_date_utc: string;
  launch_year: string;
  mission_name: string;
  details?: string;
  rocket: {
    rocket_name: string;
  };
}

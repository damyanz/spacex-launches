import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
      id
      launch_date_utc
      launch_year
      mission_name
      details
      rocket {
        rocket_name
      }
    }
  }
`;

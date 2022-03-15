import { useQuery } from "@apollo/client";
import { Virtuoso } from "react-virtuoso";
import type { NextPage } from "next";
import type { LaunchesData, LaunchesVariables } from "types/api";
import { GET_LAUNCHES } from "graphql/queries";
import Spinner from "components/spinner/Spinner";
import LaunchCard from "components/launch-card/LaunchCard";

const PER_LOAD = 10;

const Home: NextPage = () => {
  const { loading, data, fetchMore } = useQuery<
    LaunchesData,
    LaunchesVariables
  >(GET_LAUNCHES, {
    variables: {
      limit: PER_LOAD,
      offset: 0,
    },
  });

  const loadMoreItems = () => {
    fetchMore({
      variables: {
        limit: PER_LOAD,
        offset: data?.launches.length || 0,
      },
    });
  };

  return (
    <div className="h-screen w-full bg-gray-200">
      <Virtuoso
        context={{ loading }}
        style={{ height: "100%", width: "100%" }}
        data={data?.launches || []}
        endReached={loadMoreItems}
        overscan={200}
        itemContent={(index, data) => (
          <div className="p-2">
            <LaunchCard data={data} />
          </div>
        )}
        components={{
          Footer: () => (
            <div className="flex w-full justify-center py-6">
              <Spinner />
            </div>
          ),
        }}
      />
    </div>
  );
};

export default Home;

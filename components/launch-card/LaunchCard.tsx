import type { Launch } from "types/launch";
import Rocket from "components/rocket/Rocket";

type LaunchCardProps = {
  data: Launch;
};

const getFormattedDate = (date: string, locale: string = "pl-PL") =>
  new Intl.DateTimeFormat(locale).format(new Date(date));

const LaunchCard = ({
  data: { mission_name, rocket, launch_date_utc, launch_year, details },
}: LaunchCardProps) => (
  <div className="mx-auto max-w-2xl rounded-lg bg-white px-8 py-4 shadow-md">
    <div className="flex items-center justify-between">
      <span className="text-sm font-light text-gray-600 dark:text-gray-400">
        {getFormattedDate(launch_date_utc)}
      </span>
      <span className="transform cursor-pointer rounded bg-gray-600 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 hover:bg-gray-500">
        {launch_year}
      </span>
    </div>
    <div className="mt-2">
      <span className="text-2xl font-bold text-gray-700 hover:text-gray-600 hover:underline">
        {mission_name}
      </span>
      {details && <p className="mt-2 text-gray-600 ">{details}</p>}
      <div className="mt-4">
        <Rocket rocketName={rocket.rocket_name} />
      </div>
    </div>
  </div>
);

export default LaunchCard;

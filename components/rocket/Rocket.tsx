type RocketProps = {
  rocketName: string;
};

const Rocket = ({ rocketName }: RocketProps) => (
  <div className="inline-flex items-center space-x-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-semibold text-blue-800">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="16"
      height="16"
      fill="currentColor"
    >
      <g>
        <g>
          <path d="m402,494.5c7.9,7.9 20.8,7.9 28.7,0 7.9-7.9 7.9-20.8 0-28.7l-36.5-36.6-28.7,28.8 36.5,36.5z" />
          <path d="m465.8,430.7c7.9,7.9 20.8,7.9 28.7,0 7.9-7.9 7.9-20.8 0-28.7l-36.5-36.6-28.7,28.7 36.5,36.6z" />
          <path d="m494.8,245.2c-45.9-37.3-106-48.2-160.3-32.8l-130.5-130.5c-33.8-33.8-149.4-94.8-183.2-61-33.7,33.8 27.2,149.5 61,183.3l130.7,130.8c-15.2,54.1-4.2,114.1 32.9,159.8 6.3,7.7 17.7,8.4 24.8,1.4l226-226.2c7-7.1 6.3-18.6-1.4-24.8z" />
        </g>
      </g>
    </svg>
    <span>{rocketName}</span>
  </div>
);

export default Rocket;

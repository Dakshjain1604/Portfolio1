interface exp {
  title: string;
  company: string;
  description: string;
  image: string;
  date: string;
}

export function ExperienceCard(props: exp) {
  return (
    <div className="w-full rounded-xl px-6 md:px-20 pb-10 shadow-md shadow-gray-300 text-gray-300 mt-10 border border-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between py-5 px-5 mt-4 text-2xl md:text-3xl rounded-xl shadow-md shadow-gray-600 mb-5">
        <div className="flex flex-wrap items-baseline">
          <div className="font-bold">{props.title}</div>
          <div className="pl-2">| {props.company}</div>
        </div>
        <div className="text-lg md:text-xl mt-2 md:mt-0">
          {props.date}
        </div>
      </div>

      {/* Description + Image Section */}
      <div className="flex flex-col lg:flex-row justify-evenly gap-6 shadow-md shadow-gray-600 rounded-xl px-5 md:px-10 pb-10 pt-5">
        <div className="text-justify text-gray-400 text-base md:text-lg leading-relaxed">
          {props.description}
        </div>
        <div className="flex justify-center items-start">
          <img
            src={props.image}
            alt="experience"
            className="rounded-xl w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

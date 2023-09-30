import verticalLine from "../assets/icons/vertical-line.svg";

const projects = [
  {
    id: "seraph",
    name: "Seraph Station",
    date: "September 2019",
  },
  {
    id: "eebox",
    name: "Eebox Building",
    date: "August 2017",
  },
  {
    id: "federal",
    name: "Federal II Tower",
    date: "March 2017",
  },
  {
    id: "delSol",
    name: "Project Del Sol",
    date: "January 2016",
  },
  {
    id: "prototype",
    name: "Le Prototype",
    date: "October 2015",
  },
  {
    id: "b",
    name: "228B Tower",
    date: "April 2015",
  },
  {
    id: "edelweiss",
    name: "Grand Edelweiss Hotel",
    date: "December 2013",
  },
  {
    id: "netcry",
    name: "Netcry Tower",
    date: "August 2012",
  },
  {
    id: "hypers",
    name: "Hypers",
    date: "January 2012",
  },
  {
    id: "sxiv",
    name: "SXIV Tower",
    date: "March 2011",
  },
  {
    id: "trinity",
    name: "Trinity Bank Tower",
    date: "September 2010",
  },
  {
    id: "paramour",
    name: "Project Paramour",
    date: "February 2008",
  },
];

const Portfolio = () => {
  return (
    <div className="mt-[152px] mb-[72px] md:mt-0 md:mb-[200px] xl:mb-[160px]">
      {/* page tag */}
      <div className="hidden md:flex absolute top-0 left-[5%] flex-col items-center justify-center z-20 ">
        <img src={verticalLine} alt="vertical line" className="w-[1px] h-[104px] object-contain" />
        <span className="text-lightGrey paragraph tracking-[18px] tag mt-12">PORTFOLIO</span>
      </div>

      {/* projects */}
      <div className="space-y-6 px-[5%] md:px-[13%] xl:space-y-0 xl:grid xl:grid-cols-3 xl:gap-[30px]">
        {projects.map((project) => (
          <div
            className={`relative h-[240px] pl-6 pb-6 ${project.id}  flex flex-col justify-end cursor-default hover:grayscale delay-150 md:pl-10 md:pb-10 xl:h-[560px] xl:w-full xl:object-contain xl:object-center`}
          >
            <h3 className="heading3 text-white max-w-[220px] md:max-w-full xl:max-w-[220px] 2xl:max-w-full">{project.name}</h3>
            <p className="text-white paragraph font-normal mt-0">{project.date}</p>
            <h4 className="hidden md:block heading4 absolute bottom-0 right-4 xl:top-10 xl:right-[-10px]">{project.num}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

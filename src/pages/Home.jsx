import HomeHero from "../components/HomeHero";
import line from "../assets/icons/line.svg";
import arrow from "../assets/icons/icon-arrow.svg";
import welcome from "../assets/home/desktop/image-welcome.jpg";

const projects = [
  {
    id: "delSol",
    num: "1",
    name: "Project Del Sol",
    cta: "View All Projects",
  },
  {
    id: "b",
    num: "2",
    name: "228B Tower",
    cta: "View All Projects",
  },
  {
    id: "prototype",
    num: "3",
    name: "Le Prototype",
    cta: "View All Projects",
  },
];

const Home = () => {
  return (
    <div>
      <HomeHero />
      {/* welcome */}
      <section className="mt-[72px] mb-[113px] md:mt-[89px] md:mb-[200px] xl:mt-[108px]">
        <div className="px-[5%] md:px-[13%]">
          <img src={line} alt="line" className="md:hidden" />
          <span className="hidden md:block text-[150px] leading-[200px] tracking-[-3px] font-spartan text-veryLightGrey font-bold xl:text-[250px] xl:tracking-[-5px] xl:z-10">
            Welcome
          </span>
          <div className="xl:flex xl:justify-start xl:items-center xl:mt-[-80px] ">
            <div className="xl:mr-[5%] xl:ml-[10%]">
              <h2 className="heading2 mt-[68px] mb-[22px] md:mt-[-40px] md:mb-[43px] xl:mt-0 ">
                Welcome to <br />
                Arch Studio
              </h2>
              <p className="paragraph text-darkGrey">
                We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a
                strong position to deliver exceptional results. <br />
                <br />
                Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight. <br />
                <br />
                We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly
                stunning projects that will stand the test of time.
              </p>
            </div>
            <img src={welcome} alt="welcome image" className="hidden xl:block w-[350px] h-568px object-contain xl:z-[-1]" />
          </div>
        </div>
      </section>

      {/* small team, big ideas */}
      <section className="home-small-team-bg md:mx-[13%]">
        <div className="py-[180px] px-[5%] md:px-[58px] md:py-[167px] xl:px-[190px]">
          <h2 className="heading2 text-white mb-[23px]">
            Small team, <br />
            big ideas
          </h2>
          <a href="/about" className="cta text-white hover:bg-darkGrey">
            About Us <img src={arrow} alt="arrow" className="w-6 h-[18px] ml-6" />
          </a>
        </div>
      </section>

      {/* featured */}
      <section>
        <div className="px-[5%] py-[72px] md:py-[200px] md:px-[13%] md:relative">
          <h2 className="heading2 mb-[43px] md:mb-[85px] xl:mb-[64px]">Featured</h2>
          <div className="space-y-6 xl:flex xl:items-center xl:justify-between xl:space-y-0 xl:space-x-[30px]">
            {projects.map((project) => (
              <div
                className={`relative h-[240px] pl-6 pb-6 ${project.id}  flex flex-col justify-end cursor-default hover:grayscale delay-150 md:pl-10 md:pb-10 xl:h-[560px] xl:w-full xl:object-contain xl:object-center`}
              >
                <h3 className="heading3 text-white">{project.name}</h3>
                <a href="/portfolio">
                  <span className="text-white paragraph font-normal mt-0">{project.cta}</span>
                </a>
                <h4 className="hidden md:block heading4 absolute bottom-0 right-4 xl:top-10 xl:right-[-10px]">{project.num}</h4>
              </div>
            ))}
          </div>

          <a href="/portfolio" className="cta text-white mt-6 w-full flex justify-center md:absolute md:top-[200px] md:right-[13%] md:mt-0 md:w-[172px]">
            See All <img src={arrow} alt="arrow" className="w-6 h-[18px] ml-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

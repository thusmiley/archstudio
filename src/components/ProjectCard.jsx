const ProjectCard = ({ id, num, name, cta }) => {
  return (
    <div className={`relative h-[240px] pl-6 pb-6 project-bg-${id} bg-pink-400`}>
          <h3 className="heading3">{name}</h3>
      <a href='/portfolio' className="text-white paragraph font-normal">
        {cta}
      </a>
      <h4 className="hidden">{num}</h4>
      {/* <picture className="absolute top-0 left-0 mix-blend-overlay right-0">
        <source media="(max-width: 680px)" srcSet={mobile} />
        <source media="(max-width: 1200px)" srcSet={tablet} />
        <source media="(min-width: 1201px)" srcSet={desktop} />
        <img src={mobile} alt={name} className="w-full h-[240px] object-cover" />
      </picture> */}
    </div>
  );
};

export default ProjectCard;

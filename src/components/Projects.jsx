import ArrowTopRightSvg from "../svgs/ArrowTopRightSvg";
import allProjects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mt-14 md:mt-20">
      <div className="inline-block">
        <h2 className="font-semibold text-c-main-black-light dark:text-c-main-white-dark md:text-xl text-lg">Projetos</h2>
        <hr class="h-[3px] md:mt-[1px] border-0 rounded-full bg-gradient-to-r from-emerald-400 via-fuchsia-400 to-amber-400"></hr>
      </div>
      <p
        className="text-c-second-text-light dark:text-c-second-text-dark mt-1 md:mt-2 md:text-base text-sm text-justify"
      >
        Nesta seção, detaco alguns dos meus projetos publicados que eu desenvolvi ou participei ativamente do qual eu tenho mais orgulho.
      </p>
      <ul className="mt-2 md:mt-5 grid md:grid-cols-3 grid-cols-2 grid-auto-rows-auto text-c-main-black-light dark:text-c-main-white-dark text-xl gap-3">
        {
          allProjects.map((project) => {
            return (
              <li className="relative group mb-2 transition duration-150 hover:scale-1010 hover:shadow-lg overflow-hidden" key={project.name}>
                <ArrowTopRightSvg />
                <a
                  href={project.link}
                  className="border-2 rounded-2xl border-c-stroke-light dark:border-c-stroke-dark px-3 py-3 md:px-4 md:py-4 h-full flex flex-col justify-between"
                  target="_blank"
                >
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">{project.name}</h3>
                    <p className="mt-1 md:mt-0 text-xs md:text-sm text-c-second-text-light dark:text-c-second-text-dark">{project.description}</p>
                  </div>
                  <ul className="mt-2 md:mt-3 flex gap-1 text-c-second-text-light dark:c-second-text-dark h-auto flex-wrap">
                    {project.technologies.map((technology) => {
                      return (
                        <li className="text-xs py-[2px] px-2 md:py-1 md:px-2 rounded-full bg-c-secondary-light dark:bg-c-secondary-dark font-semibold" key={technology}>{technology}
                        </li>
                      )
                    })}
                  </ul>
                </a>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
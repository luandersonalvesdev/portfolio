import ArrowTopRightSvg from "../svgs/ArrowTopRightSvg";
import allProjects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="md:pt-24 pt-16">
      <h2 className="font-semibold dark:text-main-white-dark md:text-xl text-lg">Projetos</h2>
      <ul className="mt-5 grid md:grid-cols-3 grid-cols-2 grid-auto-rows-auto dark:text-main-white-dark text-xl gap-3">
        {
          allProjects.map((project) => {
            return (
              <li className="relative group mb-2 transition duration-150 hover:scale-1010 overflow-hidden" key={project.name}>
                <ArrowTopRightSvg />
                <a
                  href={project.link}
                  className="border-2 rounded-2xl dark:border-stroke-dark px-4 py-4 h-full flex flex-col justify-between"
                  target="_blank"
                >
                  <div>
                    <h3 className="font-semibold text-base">{project.name}</h3>
                    <p className="text-sm dark:text-second-text-dark">{project.description}</p>
                  </div>
                  <ul className="mt-3 flex gap-1 dark:second-text-dark h-auto flex-wrap">
                    {project.technologies.map((technology) => {
                      return (
                        <li className="text-xs py-1 px-2 rounded-full dark:bg-secondary-dark font-semibold" key={technology}>{technology}
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
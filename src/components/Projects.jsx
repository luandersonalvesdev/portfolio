import ArrowTopRightSvg from "../svgs/ArrowTopRightSvg";
import allProjects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="md:pt-24 mb-10 pt-16 w-full">
      <h2 className="font-semibold dark:text-main-white-dark md:text-xl text-lg">Projetos</h2>
      <ul className="mt-5 columns-2 md:columns-3 dark:text-main-white-dark text-xl gap-3">
        {
          allProjects.map((project) => {
            return (
              <li className="relative group h-40 md:h-48 mb-3 transition duration-150 hover:scale-1010" key={project.name}>
                <ArrowTopRightSvg />
                <a
                  href={project.link}
                  className="border-2 rounded-2xl dark:border-stroke-dark px-3 py-4 w-full h-full flex flex-col justify-between"
                  target="_blank"
                >
                  <div>
                    <h3 className="font-semibold text-base">{project.name}</h3>
                    <p className="text-sm dark:text-second-text-dark">{project.description}</p>
                  </div>
                  <ul className="mt-4 flex gap-1 dark:second-text-dark h-auto flex-wrap">
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
import skills from "../data/skills"

export default function Skills() {
  return (
    <section id="skills" className="md:pt-24 mb-20 pt-16 w-full">
      <h2 className="font-semibold dark:text-main-white-dark md:text-xl text-lg">Habilidades</h2>
      <ul className="mt-8 flex flex-wrap dark:text-main-white-dark w-full gap-3">
        {
          skills.map(({name, icon}) => {
            return (
              <li className="relative flex justify-center group hover:-translate-y-0.5 duration-150 whitespace-nowrap" key={name}>
                <span className="font-inter font-normal text-xs invisible group-hover:visible absolute -top-5">{name}</span>
                {icon}
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
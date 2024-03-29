import skills from "../data/skills"

export default function Skills() {
  return (
    <section id="skills" className="mt-14 md:mt-20">
      <div className="inline-block">
        <h2 className="font-semibold dark:text-c-main-white-dark text-c-main-black-light md:text-xl text-base">Habilidades</h2>
        <hr class="h-[3px] md:mt-[1px] border-0 rounded-full bg-gradient-to-r from-green-400 via-rose-400 to-violet-500"></hr>
      </div>
      <p
        className="text-c-second-text-light dark:text-c-second-text-dark mt-1 md:mt-2 md:text-base text-sm text-justify"
      >
        Aqui são algumas das habilidades e tecnologias que adquiri ao longo da minha jornada. Estas são ferramentas que tenho experiência em usar e que continuo aprimorando constantemente.
      </p>
      <ul className="mt-4 flex flex-wrap dark:text-c-main-white-dark text-c-main-black-light w-full gap-3">
        {
          skills.map(({name, icon}) => {
            return (
              <li className="relative flex my-2 justify-center group hover:-translate-y-0.5 duration-150 whitespace-nowrap" key={name}>
                <span className="font-geist-mono font-normal text-xs invisible group-hover:visible absolute -top-5">{name}</span>
                {icon}
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
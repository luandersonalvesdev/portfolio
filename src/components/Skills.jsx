import skills from "../data/skills"

export default function Skills() {
  return (
    <section id="skills" className="mt-14 md:mt-20">
      <div className="inline-block">
        <h2 className="font-semibold dark:text-c-main-white-dark md:text-xl text-base">Habilidades</h2>
        <hr class="h-[3px] md:mt-[1px] border-0 rounded-full dark:bg-gradient-to-r from-green-400 via-rose-400 to-violet-500"></hr>
      </div>
      <ul className="mt-4 flex flex-wrap dark:text-c-main-white-dark w-full gap-3">
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
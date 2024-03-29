import FindMeChess from "./FindMeChess";

export default function FindMe() {
  return (
    <section className="md:pt-24 pt-16" id="find-me">
      <div className="inline-block">
        <h2 className="font-semibold text-c-main-black-light dark:text-c-main-white-dark md:text-xl text-base">Encontre-me</h2>
        <hr class="h-[3px] md:mt-[1px] border-0 rounded-full bg-gradient-to-r from-lime-400 via-stone-400 to-fuchsia-400"></hr>
      </div>
      <p
        className="text-c-second-text-light dark:text-c-second-text-dark mt-1 md:mt-2 md:text-base text-sm text-justify"
      >
        Deixo aqui meus perfis em outras plataformas onde você também pode me encontrar.
      </p>
      <ul className="mt-3 md:mt-5 text-c-main-black-light dark:text-c-main-white-dark text-xl">
        <FindMeChess />
      </ul>
    </section>
  )
}
import FindMeChess from "./FindMeChess";

export default function FindMe() {
  return (
    <section className="md:pt-24 pt-16" id="find-me">
      <h2 className="font-semibold dark:text-main-white-dark md:text-xl text-lg">Encontre-me</h2>
      <p className="dark:text-second-text-dark mt-1 md:text-base text-sm">
        Algumas outras redes que você também pode me encontrar.
      </p>
      <ul className="mt-5 dark:text-main-white-dark text-xl">
        <FindMeChess />
      </ul>
    </section>
  )
}
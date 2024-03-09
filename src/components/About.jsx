export default function About() {
  return (
    <section className="mt-14 md:mt-20" id="about">
      <div className="inline-block">
        <h2 className="font-semibold dark:text-main-white-dark md:text-xl text-base">Sobre</h2>
        <hr class="h-[3px] md:mt-[1px] border-0 rounded-full dark:bg-gradient-to-r from-orange-500 via-neutral-500 to-blue-500"></hr>
      </div>
      <p className="dark:text-second-text-dark mt-1 md:mt-3 md:text-base text-sm text-justify">
        Morador de Paulo Afonso, cidade do interior da Bahia, descobri a programação em 2022. Em 2023, ingressei na <a className="dark:text-green-100 hover:underline" href="https://www.betrybe.com" target="_blank">Trybe</a> e, após um ano, me formei, sendo condecorado como <a className="dark:text-green-100 hover:underline" href="https://www.credential.net/a3bb1111-88a3-47a0-88ab-50b4ebcdceb2" target="_blank">aluno destaque</a> da turma.
      </p>
      <p className="dark:text-second-text-dark mt-1 md:mt-2 md:text-base text-sm text-justify">
      Com uma abordagem criativa, tenho um apreço especial por desenvolver soluções práticas e inovadoras. Busco constantemente desafios que me permitam contribuir para facilitar a vida de alguém.
      </p>
    </section>
  )
}
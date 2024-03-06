import useGetGithub from "../hooks/useGetGithub";
import GithubSvg from "../svgs/GithubSvg";
import LinkedinSvg from "../svgs/LinkedinSvg";
import React from 'react'

export default function Profile() {

  const user = useGetGithub();

  return (
    <section className="mt-24 w-1/2" id="profile">
      <img
        className="w-16 h-w-16 rounded-full mb-5 md:w-20 md:h-w-20"
        src={user.avatar_url}
        alt="Minha foto de perfil"
      />
      <h1 
        className="
          dark:text-main-white-dark
          font-poppins
          font-bold
          text-2xl
          md:text-4xl
          "
        >
          Luanderson Alves
      </h1>
      <p
        className="dark:text-second-text-dark md:text-base text-sm"
      >
        Desenvolvedor Full Stack apaixonado em criar soluções digitais impactantes.
      </p>
      <div className="mt-8 gap-4 flex">
        <a
          className="border dark:border-stroke-dark shadow rounded-full h-full pt-1.5 pb-0.5 pl-9 pr-7 transition duration-150 hover:scale-1025 hover:shadow-lg hover:brightness-105"
          href="https://linkedin.com/in/luandersonalvesdev"
          target="_blank"
          >
            <LinkedinSvg />
        </a>
        <a
          className="border dark:border-stroke-dark shadow rounded-full h-full py-1 px-8 transition duration-150 hover:scale-1025 hover:shadow-lg hover:brightness-105"
          href="https://github.com/luandersonalvesdev"
          target="_blank"
          >
            <GithubSvg />
        </a>
      </div>
    </section>
  )
}
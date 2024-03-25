import useGetGithub from "../hooks/useGetGithub";
import GithubSvg from "../svgs/GithubSvg";
import LinkedinSvg from "../svgs/LinkedinSvg";
import React from 'react'

export default function Profile() {

  const user = useGetGithub();

  return (
    <section className="mt-14 md:mt-20 flex flex-row" id="profile">
      <img
        className="rounded-full h-12 w-1h-12 md:h-14 md:w-h-14"
        src={user.avatar_url}
        alt="Minha foto de perfil"
      />
      <div className="ml-4 w-full">
        <div className="flex flex-col">
          <h1
            className="
                text-c-main-black-light
                dark:text-c-main-white-dark
                font-geist
                font-bold
                inline
                text-lg
                md:text-xl
              "
            >
              Luanderson Alves
          </h1>
          <p
            className="text-c-second-text-light dark:text-c-second-text-dark inline md:text-base text-sm"
          >
            Desenvolvedor Web Full Stack.
          </p>
        </div>
        <div className="mt-2 md:mt-4 flex">
          <a
            className="h-full mx-2 pt-1.5 pb-0.5 transition duration-150 hover:scale-1025 hover:shadow-lg hover:brightness-105"
            href="https://linkedin.com/in/luandersonalvesdev"
            target="_blank"
            >
              <LinkedinSvg />
          </a>
          <a
            className="h-full mx-2 py-1 transition duration-150 hover:scale-1025 hover:shadow-lg hover:brightness-105"
            href="https://github.com/luandersonalvesdev"
            target="_blank"
            >
              <GithubSvg />
          </a>
        </div>
      </div>
    </section>
  )
}
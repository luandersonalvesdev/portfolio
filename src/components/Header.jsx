import SwitchTheme from './SwitchTheme'

export default function Header() {
  return (
    <header className="mt-14 text-xs md:text-base md:mt-20 dark:text-c-main-white-dark relative">
      <ul className="flex gap-4 md:gap-6">
        <li>
          <a href="#profile">início</a>
        </li>
        <li>
          <a href="#projects">projetos</a>
        </li>
        <li>
          <a href="#skills">habilidades</a>
        </li>
        <li>
          <a href="#find-me">encontre-me</a>
        </li>
      </ul>
      <SwitchTheme />
    </header>
  );
}
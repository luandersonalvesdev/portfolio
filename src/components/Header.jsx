export default function Header() {
  return (
    <header className="pt-16 text-base dark:text-main-white-dark">
      <ul className="flex gap-4 md:gap-6">
        <li>
          <a href="#profile">início</a>
        </li>
        <li>
          <a href="#about">sobre</a>
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
    </header>
  );
}
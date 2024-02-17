export default function Header() {
  return (
    <header className="pt-14 text-base text-main-black dark:text-main-white">
      <ul className="flex gap-4 md:gap-6">
        <li>
          <a href="#">início</a>
        </li>
        <li>
          <a href="#">sobre</a>
        </li>
        <li>
          <a href="#">projetos</a>
        </li>
        <li>
          <a href="#">habilidades</a>
        </li>
        <li>
          <a href="#">encontre-me</a>
        </li>
      </ul>
    </header>
  );
}
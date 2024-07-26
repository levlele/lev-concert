export function Footer() {
  return (
    <footer
      className="text-acid-400 bg-secondary-foreground py-8"
      style={{
        viewTransitionName: "transition-footer",
      }}
    >
      <div className="container text-right">
        Hecho por diversión por{" "}
        <a
          href="https://leandro-vilanova.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-acid-600 font-chackra font-bold"
        >
          LEV/D
        </a>
      </div>
    </footer>
  );
}

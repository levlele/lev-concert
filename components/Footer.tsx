export function Footer() {
  return (
    <footer
      className="bg-foreground py-8 text-background"
      style={{
        viewTransitionName: "transition-footer",
      }}
    >
      <div className="container text-right">
        Made for fun by{" "}
        <a
          href="https://leandro-vilanova.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-chackra font-bold"
        >
          LEV/D
        </a>
      </div>
    </footer>
  );
}

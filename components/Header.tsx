export function Header() {
  return (
    <header
      className="bg-acid-600 py-8"
      style={{
        viewTransitionName: "transition-header",
      }}
    >
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
        <h1 className="font-chackra text-5xl font-bold uppercase leading-none md:text-8xl">
          Lev.Concerts
        </h1>
        <div className="w-80 md:ml-auto">
          <p className="text-xs">
            Debajo se encuentran listados recitales, conciertos, festivales, y
            eventos a los que asistí las últimas dos décadas. Solo pop
            ochentero, rock, metal, indies y oldies que demuestran que se me
            cayó el DNI.
          </p>
        </div>
      </div>
    </header>
  );
}

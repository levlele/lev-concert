export function Header() {
  return (
    <header
      className="bg-background py-8"
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
            Below is a vibrant and joyful collection of the festivals and
            concerts I&apos;ve danced, sang, and celebrated at over the last two
            decades. From heart-pounding beats to soul-stirring melodies, each
            event has been a memorable chapter in my musical journey, filled
            with unforgettable moments and euphoric experiences.
          </p>
        </div>
      </div>
    </header>
  );
}

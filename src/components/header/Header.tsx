const MENU_OPTIONS = [
  {
    label: "projects",
    locationId: "projects",
  },
  {
    label: "skills",
    locationId: "skills",
  },
  {
    label: "contact",
    locationId: "contact",
  },
];

const handleScrollToId = (id: string) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  return (
    <section className="flex flex-row items-center justify-between h-20">
      <h1 className="text-4xl font-bold">NM.</h1>
      <div className="flex flex-row gap-5">
        <div className="flex flex-row gap-5">
          {MENU_OPTIONS.map((menuItem) => (
            <div
              onClick={() => handleScrollToId(menuItem.locationId)}
              className="text-lg cursor-pointer hover:scale-105 transition-transform"
              key={menuItem.label}
            >
              {menuItem.label}
            </div>
          ))}
        </div>
        <p>Toggle</p>
      </div>
    </section>
  );
};

export default Header;

import NavItem from "./NavItem";

const navItems = [
  {
    label: "Why Cypress?",
    path: "/",
    dataTest: "nav-bar-why-cypress",
  },
  {
    label: "Overview",
    path: "/overview",
    dataTest: "nav-bar-overview",
  },
  {
    label: "Fundamentals",
    path: "/fundamentals",
    dataTest: "nav-bar-fundamentals",
  },
  {
    label: "Forms",
    path: "/forms",
    dataTest: "nav-bar-forms",
  },
  {
    label: "Examples",
    path: "/examples",
    dataTest: "nav-bar-examples",
  },
  {
    label: "Component",
    path: "/component",
    dataTest: "nav-bar-component",
  },
  {
    label: "Best Practices",
    path: "/best-practices",
    dataTest: "nav-bar-best-practices",
  },
];

export default function NavBar() {
  return (
    <ul className='nav-bar'>
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          path={item.path}
          dataTest={item.dataTest}
        />
      ))}
    </ul>
  );
}

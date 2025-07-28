import { NavLink, type NavLinkProps } from "react-router";

interface Props {
  prefix?: React.ReactNode;
  links?: NavLinkProps[];
  suffix?: React.ReactNode;
}

export const Navigator: React.FC<Props> = ({ prefix, links = [], suffix }) => {
  const linkNodes = links.map((link) => (
    <NavLink
      key={`nav-link:${link.to}`}
      to={link.to}
      className={(isActive) => (isActive ? "active" : "inactive")}
    >
      {link.children}
    </NavLink>
  ));
  return (
    <nav className="barp-navigator">
      {prefix}
      <div className="links">{linkNodes}</div>
      {suffix}
    </nav>
  );
};

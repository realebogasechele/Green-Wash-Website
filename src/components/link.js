/** @jsx jsx */
import { jsx, NavLink as MenuLink } from "theme-ui";
import { Link as A } from "react-scroll";

export function NavLink({ path, label, children, ...rest }) {
  return <h1>NavLink</h1>;
}

export function Link({ path, label, children, ...rest }) {
  return (
    <A
      to={path}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
      key={path}
      {...rest}
    >
      {children || label}
    </A>
  );
}

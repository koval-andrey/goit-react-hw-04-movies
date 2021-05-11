import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import routes from "routes";

const Navifation = () => (
  <ul className={styles.navigationList}>
    <li>
      <NavLink
        exact
        to={routes.home}
        className={styles.navigationLink}
        activeClassName={styles.navigationLinkActive}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.movies}
        className={styles.navigationLink}
        activeClassName={styles.navigationLinkActive}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navifation;

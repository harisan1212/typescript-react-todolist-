/**
 * Navigation
 *
 * @package components
 */
import { NavigationLink } from "../../atoms/NavigationLink";
import { NAVIGATION_PATH } from "../../../constants/navigation";
import styles from "./styles.module.css";
import { FC } from "react";

/**
 * Navigation - component
 *
 * @returns {JSX.Element}
 */
export const Navigation: FC = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <NavigationLink title={"Top"} linkPath={NAVIGATION_PATH.TOP} />
        <NavigationLink title={"Create"} linkPath={NAVIGATION_PATH.CREATE} />
      </ul>
    </nav>
  );
};

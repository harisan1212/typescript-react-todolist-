/**
 * BaseaLayout
 *
 * @package components
 */

import { FC, ReactNode } from "react";
import { Navigation } from "../../molecules/Navigation";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  title: string;
};

/**
 * BaseLayout
 * @param children
 * @param {string} title
 * @returns {JSX.Element}
 */
export const BaseaLayout: FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <section className={styles.common}>
        <Navigation />
      </section>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

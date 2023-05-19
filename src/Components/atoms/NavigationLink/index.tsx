/**
 * NavigationLink
 *
 * @package components
 */
import { FC } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

type Props = { title: string; linkPath: string };

/**
 * NavigationLink - component
 * @param title -　ナビゲーションのタイトル
 * @param linkPath - 遷移先のURL
 */
export const NavigationLink: FC<Props> = (props) => {
  const { title, linkPath } = props;
  return (
    <li className={styles.li}>
      <Link to={linkPath}>{title}</Link>
    </li>
  );
};

/**
 * CommonButton
 *
 * @package components
 */

import { FC } from "react";
import styles from "./styles.module.css";

//Props型は button要素に対して指定できるすべてのプロパティを持つオブジェクトを表しています。
type Props = JSX.IntrinsicElements["button"];

/**
 * CommonButton　component
 * @param type - ボタンの種類
 * @param title - ボタンのタイトル
 * @oaram onClick　-ボタンの変更バンドラー
 *
 */
export const CommonButton: FC<Props> = (props) => {
  const { type, title, onClick } = props;

  return (
    <button className={styles.button} type={type} onChange={onClick}>
      {title}
    </button>
  );
};

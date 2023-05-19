/**
 * TextArea
 *
 * @package components
 */

import { FC } from "react";
import styles from "./styles.module.css";

type Props = JSX.IntrinsicElements["textarea"];

/**
 * Textarea - component
 *
 * @param disabled - テキストエリアを無効化するかどうかを示す
 * @param value - テキストエリアの現在の値
 * @param placeholder - テキストエリアのプレースホルダーテキスト
 * @param onChange -　テキストエリアの値が変更されたときのイベントハンドラー
 *
 */
export const TextArea: FC<Props> = (props) => {
  const { disabled = false, value, placeholder, onChange } = props;

  return (
    <textarea
      className={styles.text}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

/**
 * InputForm
 *
 * @package components
 */

import { FC } from "react";
import styles from "./styles.module.css";

type Props = JSX.IntrinsicElements["input"];

/**
 * InputForm component
 *
 * @param disabled - 入力フィールドを無効化するかどうかを示す
 * @param value - 入力フィールドの現在値
 * @param placeholder - 入力フィールドのプレースホルダーテキスト
 * @param onChange - 入力値のイベントハンドラー
 * @param onKeyDown - 入力フィールド上でのキーダウンイベントハンドラー
 */
export const InputForm: FC<Props> = (props) => {
  const { disabled = false, value, placeholder, onChange, onKeyDown } = props;
  return (
    <input
      className={styles.input}
      disabled={disabled}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

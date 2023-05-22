/**
 * useTodoList
 *
 * @package components
 */

import { useNavigate } from "react-router-dom";
import { NAVIGATION_PATH } from "../../../constants/navigation";
import { useCallback } from "react";

type ActionType = {
  handleMoveDetailPage: (id: number) => void;
  handleMoveEditPage: (id: number) => void;
};

/**
 * useTodoList
 */

//react routerで画面遷移時に組み合わせる
export const useTodoList = () => {
  const navigate = useNavigate();

  /**
   * 詳細ページに遷移する処理
   * @param {*} id
   * @type {function(*): void}
   */
  const handleMoveDetailPage = useCallback(
    (id: number) => {
      navigate(`${NAVIGATION_PATH.DETAIL}${id}`);
    },
    [navigate]
  );

  /**
   * 編集ページに遷移する処理
   * @param {*} id
   * @type {function(*): void}
   */
  const handleMoveEditPage = useCallback(
    (id: number) => {
      navigate(`${NAVIGATION_PATH}${id}`);
    },
    [navigate]
  );

  const action: ActionType = {
    handleMoveDetailPage,
    handleMoveEditPage,
  };

  // as const - 全ての値をreadonly（読み取り専用、変更不可）にするアサーション。
  return [action] as const;
};

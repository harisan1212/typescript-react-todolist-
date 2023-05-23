/**
 * カスタムフック
 * React hooksの処理をコンポーネントに直接書くのではなく、
 * 別ファイルに切り出して新しいhooksとして定義した関数のことをカスタムフックと言います。
 *
 * @package hooks
 */

import { useState, useCallback } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

/**
 * useTodo
 */
export const useTodo = () => {
  /* todolist */
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  /* todo採番ID */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  /* action */
  /**
   * Todo新規登録処理
   * @param {string}title
   * @param {string}content
   * @type {function(*,*):void}
   */

  const addTodo = useCallback(
    (title: string, content: string) => {
      const nextUniqueId = uniqueId + 1;
      const newTodo = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: title,
          content: content,
        },
      ];

      //todolistの更新
      setOriginTodoList(newTodo);
      setUniqueId(nextUniqueId);
    },
    [originTodoList, uniqueId]
  );

  /**
   * Todoの更新処理
   *
   * @param {number}id
   * @param {string}title
   * @param {string}content
   * @type {function(*,*,*):void}
   */
  const updateTodo = useCallback(
    (id: number, title: string, content: string) => {
      const updateTodoList = originTodoList.map((todo) => {
        if (id === todo.id) {
          return {
            id: todo.id,
            title: title,
            content: content,
          };
        }
        return todo;
      });
      setOriginTodoList(updateTodoList);
    },
    [originTodoList]
  );

  /**
   * TodoListの削除処理
   * @param {number} targetId
   * @param {string} targetTitle
   * @type {function(*,*):void}
   */
  const deleteTodo = useCallback(
    (targetId: number, targetTitle: string) => {
      if (window.confirm(`「${targetTitle}」のtodoListを削除いたしますか？`)) {
        const newTodoList = originTodoList.filter(
          (todo) => todo.id !== targetId
        );
        setOriginTodoList(newTodoList);
      }
    },
    [originTodoList]
  );

  return {
    originTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};

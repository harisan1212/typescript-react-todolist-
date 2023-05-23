/**
 * useTodoTemplate
 *
 * @package hooks
 */

import { useState, useMemo, useCallback } from "react";
import { TodoType } from "../../../interfaces/Todo";
import { EventType } from "../../../interfaces/Event";

type Params = {
  originTodoList: Array<TodoType>;
};

type StatesType = {
  searchKeyword: string;
  showTodoList: Array<TodoType>;
};

type ActionsType = {
  handleChangeSerchKeyword: EventType["onChangeInput"];
};

export const useTodoTemplate = ({ originTodoList }: Params) => {
  /* 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState("");

  /* 表示用TodoList */
  const showTodoList = useMemo(() => {
    //searchKeywordの先頭部分一致
    const regexp = new RegExp("^" + searchKeyword, "i");
    return originTodoList.filter((todo) => {
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  /**
   * 検索キーワード更新処理
   * @param {*} e
   */
  const handleChangeSerchKeyword: EventType["onChangeInput"] = useCallback(
    (e) => {
      setSearchKeyword(e.target.value);
    },
    []
  );

  const states: StatesType = {
    searchKeyword,
    showTodoList,
  };

  const actions: ActionsType = {
    handleChangeSerchKeyword,
  };

  return [states, actions] as const;
};

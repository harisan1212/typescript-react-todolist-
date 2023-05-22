import { createContext, FC, ReactNode, useContext } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoType } from "../interfaces/Todo";

type Props = {
  children: ReactNode;
};

interface ContextInterface {
  originTodoList: Array<TodoType>;
  addTodo: (title: string, content: string) => void;
  updateTodo: (id: number, title: string, content: string) => void;
  deleteTodo: (targetId: number, targetTitle: string) => void;
}

/**
 * TodoContext
 * contextオブジェクトを作成
 */
const TodoContext = createContext({} as ContextInterface);

export const TodoProvider: FC<Props> = ({ children }) => {
  // カスタムフックから状態とロジックを呼び出してコンテキストプロバイダーにあてがう
  const { originTodoList, addTodo, updateTodo, deleteTodo } = useTodo();

  return (
    //providerを使用し、渡すデータを入れる
    //渡されたvalueオブジェクトを使って、アプリ全体で使用することができるデータを提供します。
    <TodoContext.Provider
      value={{
        originTodoList,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

/* useTodoContext */
export const useTodoContext = () => useContext(TodoContext);

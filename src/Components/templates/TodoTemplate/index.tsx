/**
 * TodoTemplate
 *
 * @package components
 */

import { useTodoContext } from "../../../contexts/TodoContext";
import { BaseLayout } from "../../organisms/BaseLayout";
import { useTodoTemplate } from "./useTodoTemplate";
import styles from "./styles.module.css";
import { InputForm } from "../../atoms/InputForm";
import { TodoList } from "../../organisms/TodoList";

/**
 * TodoTemplate
 * @returns {JSX.Element}
 */

export const TodoTemplate = () => {
  //コンテキストからstateとロジックを呼び出してコンポーネントにあてがう
  const { originTodoList, deleteTodo } = useTodoContext();
  const [{ searchKeyword, showTodoList }, { handleChangeSerchKeyword }] =
    useTodoTemplate({ originTodoList });

  return (
    <BaseLayout title={"TodoList"}>
      <div className={styles.container}>
        <div className={styles.area}>
          {/* Todo検索フォームエリア */}
          <InputForm
            value={searchKeyword}
            placeholder={"Search Keyword"}
            onChange={handleChangeSerchKeyword}
          />
        </div>
        {/* Todoリスト一覧表示 */}
        <div className={styles.area}>
          {showTodoList.length > 0 && (
            <TodoList todoList={showTodoList} handleDeleteTodo={deleteTodo} />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

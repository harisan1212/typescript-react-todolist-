/**
 * TodoEditTemplate
 *
 * @package components
 */

import { useTodoContext } from "../../../contexts/TodoContext";
import { BaseLayout } from "../../organisms/BaseLayout";
import { useTodoEditTemplate } from "./useTodoEditTemplate";
import styles from "./styles.module.css";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { CommonButton } from "../../atoms/CommonButton";

/**
 * TodoEditTemplate
 * @returns {JSX.Element}
 */
export const TodoEditTemplate = () => {
  //コンテキストからstateとロジックを呼び出してコンポーネントにあてがう
  const { originTodoList, updateTodo } = useTodoContext();
  const [
    { todo, inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleUpdateTodo },
  ] = useTodoEditTemplate({ originTodoList, updateTodo });

  return (
    <BaseLayout title={"TodoEdit"}>
      {!!todo && (
        <form className={styles.container} onSubmit={handleUpdateTodo}>
          <div className={styles.area}>
            <InputForm
              value={inputTitle}
              placeholder={"Title"}
              onChange={handleChangeTitle}
            />
          </div>
          <div className={styles.area}>
            <TextArea
              value={inputContent}
              placeholder={"Content"}
              onChange={handleChangeContent}
            />
          </div>
          <div className={styles.area}>
            <CommonButton type={"submit"} title={"Edit Todo"} />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};

/**
 * TodoList
 *
 * @ppackage components
 */

import { FC } from "react";
import {
  faFile,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoType } from "../../../interfaces/Todo";
import { useTodoList } from "./useTodoList";
import styles from "./style.module.css";

type Props = {
  todoList: Array<TodoType>;
  handleDeleteTodo: (targetId: number, targetTitle: string) => void;
};

/**
 * TodoList
 * @param {*} props
 * @returns {JSX.Element}
 */
export const TodoList: FC<Props> = (props) => {
  const { todoList, handleDeleteTodo } = props;
  const [{ handleMoveDetailPage, handleMoveEditPage }] = useTodoList();

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li key={todo.id} className={styles.todo}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.area}>
            <div className={styles.far}>
              <FontAwesomeIcon
                icon={faFile}
                size="lg"
                onClick={() => {
                  handleMoveDetailPage(todo.id);
                }}
              />
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="lg"
                onClick={() => {
                  handleMoveEditPage(todo.id);
                }}
              />
              <FontAwesomeIcon
                icon={faTrashAlt}
                size="lg"
                onClick={() => {
                  handleDeleteTodo(todo.id, todo.title);
                }}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { connect } from "react-redux";
import "./App.css";
import { addTask, deleteTask, deleteAllTasks } from "./redux/actions/tasks";

const App = (props) => {
  const { tasks, addTask, deleteTask, deleteAllTasks } = props;
  const [active, setActive] = useState(null);

  const saveTask = (e) => {
    e.preventDefault();
    const task = document.getElementsByName("task")[0].value;
    const active = document.getElementsByName("active")[0].checked;
    const teskInput = document.getElementById("teskInput");

    var id = Math.round(Math.random() * 10000000);
    addTask(id, task, active);
    teskInput.value = "";
  };
  return (
    <div className="container">
      <div className="cont-2">
        <h1>TO DO APP</h1>
        <div className="todo">
          <form className="todo-form">
            <div className="todo-li-item">
              <input type="checkbox" name="active" />
              <input
                id="teskInput"
                className="todo-input"
                name="task"
                placeholder="Görev Ekle..."
              ></input>
              <button className="btn" onClick={saveTask}></button>
            </div>
          </form>
        </div>
        <div className="todo-list">
          {tasks &&
            tasks
              .filter((a) => (active !== null ? a.active === active : a))
              .map((task) => {
                return (
                  <div className="todo-li-item " key={task.id}>
                    <input
                      type="checkbox"
                      name="check"
                      defaultChecked={task.active}
                    />
                    <label htmlFor="check">{task.task} </label>

                    <button className="sil" onClick={() => deleteTask(task.id)}>
                      <IoClose className="icon" />
                    </button>
                  </div>
                );
              })}
        </div>

        <div className="foot-div">
          <footer>
            <button className="btn-fooret">{tasks.length} Görev</button>
            <button className="btn-fooret" onClick={() => setActive(null)}>
              Hepsi
            </button>

            <button className="btn-fooret" onClick={() => setActive(false)}>
              Aktif
            </button>

            <button className="btn-fooret" onClick={() => setActive(true)}>
              Tamamlanmış
            </button>
            <button className="btn-fooret" onClick={() => deleteAllTasks()}>
              Tümünü sil
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ tasks }) => {
  return {
    tasks: tasks.tasks,
  };
};

const mapDispatchToProps = {
  addTask,
  deleteTask,
  deleteAllTasks,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

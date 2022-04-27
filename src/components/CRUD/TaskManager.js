import React, { useState, useEffect } from "react"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from "./firebase"
import AddTask from "./AddTask"
import Task from "./Task"

function TaskManager() {
  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasks, setTasks] = useState([])

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const taskColRef = query(
      collection(db, "tasks"),
      orderBy("created", "desc")
    )
    onSnapshot(taskColRef, snapshot => {
      setTasks(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    })
  }, [])

  return (
    <section className="task-section">
      <h1 className=" py-5">Stories...</h1>
      <div className="container">
        <div className="text-center mb-4">
          <button
            className="btn m-1 bg-secondary text-light shadow"
            onClick={() => setOpenAddModal(true)}
          >
            New Story +
          </button>
        </div>
        <div>
          {openAddModal && (
            <AddTask
              onClose={() => setOpenAddModal(false)}
              open={openAddModal}
            />
          )}
          {tasks.map(task => (
            <Task
              id={task.id}
              key={task.id}
              completed={task.data.completed}
              title={task.data.title}
              description={task.data.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TaskManager

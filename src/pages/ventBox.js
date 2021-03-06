import React from "react"
import TaskManager from "../components/CRUD/TaskManager"
import Layout from "../components/Layout/Layout"

const VentBox = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center py-5">VentBox</h2>
        <TaskManager/>
      </div>
    </Layout>
  )
}

export default VentBox

import React from 'react'
import TodoList from '../TodoList/TodoList'

import styles from './Content.module.css'

const Content = () => {
  return (
    <section className={`${styles.main}`}>
      <input className={`${styles.toggle_all}`} type="checkbox" />
    <label htmlFor={`${styles.toggle_all}`}>Mark all as complete</label>

      <TodoList />
    </section>
  )
}

export default Content

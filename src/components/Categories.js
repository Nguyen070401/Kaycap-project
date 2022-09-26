import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import styles from "./Categories.module.css"

const Categories = () => {
  return (
    <>
    <div className={styles.Title}>GROUP PRODUCTS</div>
    <div className={styles.Container}>
       
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </div>
    </>
  )
}

export default Categories

import React from 'react'
import styles from "./CategoryItem.module.css"
const CategoryItem = ({item}) => {
  return (
    
    <div className={styles.CategoryItem}>
        <img className={styles.Image} src={item.img} alt=""/>  
        <div className={styles.Info}>
        <h1 className={styles.Title} >{item.title}</h1>
                       
        <button className={styles.Button}>SHOP NOW</button>
        </div>  
     </div>
  )
}

export default CategoryItem

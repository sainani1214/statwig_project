import { useEffect, useState } from 'react';
import styles from '../StyleSheets/CategoryScreen.module.css'
import axios from 'axios';


function CategoryScreen(){
  const[selectedCategory,setSelectedCategory] = useState('all');
  const[items,setItems] = useState([]);

  useEffect(()=>{
    const getItems=()=>{
      let apiEndpoint;
        if(selectedCategory === 'all'){
          apiEndpoint = "https://takehome.statledger.io/api/v1/all"
        }else if(selectedCategory === 'dogs'){
          apiEndpoint = "https://takehome.statledger.io/api/v1/dogs"
        }else if(selectedCategory === 'cats'){
          apiEndpoint = "https://takehome.statledger.io/api/v1/cats"
        }

        axios.get(apiEndpoint).then((response)=>{
          if(response.status === 200){
            setItems(response.data)
          }else{
            console.log("Error while fetching items")
          }
        })
    }
    
    getItems();

  },[selectedCategory])

  const categoryHandler=(category)=>{
    setSelectedCategory(category);
  }

  



  return(
    <>
    <div className={styles.mainContainer}>

      <div className={styles.categoryLeftPart}>
        <h6>What's new?</h6>
        <h4>Take A Look At Some Of Our Pets</h4>
      </div>

      <div className={styles.categoryRightPart}>
        <button onClick={()=>categoryHandler('all')}>All</button>
        <button onClick={()=>categoryHandler('dogs')}>Dogs</button>
        <button onClick={()=>categoryHandler('cats')}>Cats</button>
      </div>
    </div>

    


    
    <div className={styles.cardContainer}>
        {
          items.map((eachItem)=>{
            return(
              <>
              <div className={styles.card}>
                <img  src={eachItem.image} alt='CategoryImage'/>
                <h6>Breed : {eachItem.breed}</h6>
                <span>Gene : {eachItem.gender}</span>
                <span style={{marginLeft:"10px"}}>Age : {eachItem.ageMonths}</span>
                <h6 style={{marginTop:"5px"}}>{eachItem.price}.00$</h6>

              </div>
              </>
            )
          })
        }
      </div>

    </>
  )
}

export default CategoryScreen;
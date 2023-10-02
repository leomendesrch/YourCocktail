import { useState, useEffect } from 'react'
import axios from 'axios';
import { DrinksProps } from '@/types/DrinksProps';

export function useDrinks(searchParam: string){
  const [drinks, setDrinks] = useState([]);

  const drinkURLByType = searchParam !== 'random'? 
  'https://the-cocktail-db.p.rapidapi.com/filter.php' 
  : 
  'https://the-cocktail-db.p.rapidapi.com/random.php'  

  useEffect(() => {
    const options = {
    params: {
      i: searchParam
    },
    headers: {
      'X-RapidAPI-Key': '45438fe1d9mshc7cfae93f25467ap1a1722jsn8f63f62ec813',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
      }
    }
    axios.get(drinkURLByType, options).then(res => {
      setDrinks(res.data.drinks)
    })
  }, [])
  
  return drinks
}
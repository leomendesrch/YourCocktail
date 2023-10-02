"use client"
import './drinks-style.css'

import BackIcon from '@/components/BackIcon/BackIcon'
import Card from '@/components/card'
import { useDrinks } from '@/hooks/useDrinks'
import { DrinksProps } from '@/types/DrinksProps'

import { useRouter } from 'next/navigation'

interface DrinksPageProps{
  searchParams: {
    search: string
  }
}

export default function DrinksPage({ searchParams }: DrinksPageProps){
  const router = useRouter();

  const drinks: DrinksProps[] = useDrinks(searchParams.search);
  if(typeof drinks === 'string'){
    alert("Drink não encontrado na nossa base de dados")
    router.push('/');
  } 

  console.log(drinks)
  return(
    <main>
      <div className='top-container'>
        <button className='back-btn' onClick={() => router.push('/')}>
          <BackIcon />
        </button>
        <div className='title-container'>
          <h1 className='title'>{searchParams.search[0].toUpperCase() + searchParams.search.substring(1)}</h1>
        </div>
      </div>
      <div className='drinks-list'>
        {
          typeof drinks === 'string'?
          ''
          :
          drinks?.map((drink) => (
            <Card imageUrl={drink.strDrinkThumb} title={drink.strDrink} key={drink.idDrink}></Card>
          ))
        }
      </div>
    </main>
  )
}
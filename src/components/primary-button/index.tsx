"use client"
import './styles.css'

import { useState} from 'react'
import { useRouter } from 'next/navigation'

interface PrimaryButtonProps{
  label: string,
}

export default function PrimaryButton({label}: PrimaryButtonProps){
  const router = useRouter();

  return(
    <button 
      className='surprise-button' 
      onClick={() => {
        router.push(`/drinks?search=${'random'}`);
        }
      }
      >
      {label}
    </button>
  )
}
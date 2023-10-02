import Image from "next/image"
import './styles.css'

interface CardProps{
  imageUrl: string,
  title: string
}


export default function Card({imageUrl, title}: CardProps){
  return(
    <div className="card-container">
      <Image
      src={imageUrl}
      alt={`drink with ${title}`}
      width={310}
      height={330}
      className="image"
      />
      <h3>{title}</h3>
    </div>
  )
}
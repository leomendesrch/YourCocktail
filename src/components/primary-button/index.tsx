import './styles.css'

interface PrimaryButtonProps{
  label: string,
  onClick: () => void
}

export default function PrimaryButton({label, onClick}: PrimaryButtonProps){
  return(
    <button className='surprise-button' onClick={() => onClick()}>{label}</button>
  )
}
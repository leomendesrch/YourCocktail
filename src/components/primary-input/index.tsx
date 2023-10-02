import './style.css'
import { useRouter } from 'next/navigation'

interface PrimaryInputProps{
  label: string,
  value: string,
  onChange: (value: string) => void
}

export function PrimaryInput({label, value, onChange}: PrimaryInputProps){
  const router = useRouter();

  return(
    <>
    <div className='input-wrapper'>
      <input 
      className="primary-input" 
      onKeyDown={(e) => e.key === 'Enter'? router.push(`/drinks?search=${value}`) : ''} 
      value={value} 
      type="text" 
      onChange={(e) => onChange(e.target.value)} 
      placeholder={label}
      />
    </div>
    </>
  )
}
"use client"
import {useTranslations} from 'next-intl';
import { useRouter } from 'next/navigation';
 
export default function HomePage() {
    const t = useTranslations('HomePage');
    const router = useRouter()

  const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    if(e.target.value == "en"){
        router.push("/en")
    }else{
        router.push("/vi")
    }
  }
  return <>
  <select name="" id="" onChange={handleChange}>
    <option value="vi">tiếng Việt</option>
    <option value="en">tiếng Anh</option>
  </select>
      <div>
      <h1>{t('title')}</h1>
      <div>{t('about')}</div>
    </div>
  </>
}
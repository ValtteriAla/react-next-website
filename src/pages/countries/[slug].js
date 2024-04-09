import { useRouter } from 'next/router'
import ListCountryData from '@/components/ListCountryData'
export default function Page() {
  const router = useRouter()
  return <ListCountryData/>
}
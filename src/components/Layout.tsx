import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Layout: React.FC<any>  = () => {
  return <>
    <div className='page'>
      <TopBar />
      <h1>Home Content</h1>
    </div>
  </>
}

export const TopBar: React.FC<any> = () => {
  const router = useRouter();
  const { data, error } = useSwr(
    `/api/contact`,
    fetcher
  )

  return <div className="top-bar">

  </div>
}

export default Layout;

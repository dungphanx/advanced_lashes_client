import useSwr from 'swr'
import { useRouter } from 'next/router'
import { BsEnvelopeFill, BsPhoneFill, BsClockFill, BsFacebook, BsTwitter, BsFillCartFill, BsSearch } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import MenuItem from '../interfaces/menu-item'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Layout: React.FC<any>  = () => {
  return <>
    <div className='page'>
      <header className='page-header'>
        <TopBar />
        <Menu />
      </header>
      <h1>Home Content</h1>
    </div>
  </>
}

const useMenu = () => {
  const { data, error } = useSWR(`/api/menu/`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export const MenuItems: React.FC<any> = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useMenu();

  if (isLoading) return <div>Loading..</div>
  if (isError) return <div>Error..</div>

  return <ul className="flex gap-5 mt-3">
    {
      data.map((menuItem: MenuItem) =>
        <li className={ router.pathname == menuItem.url ? 'nav-item active' : 'nav-item' }>
          <Link href={menuItem.url}>
            <a className='inline-block overflow-hidden'>
              <div className='menu-text text-base'>{ menuItem.text }</div>
              <div className='menu-desc text-sm'>{ menuItem.desc }</div>
              <i className='underline'></i>
            </a>
          </Link>
        </li>
      )
    }
  </ul>
}

export const MenuUtil: React.FC<any> = () => {
  return <>
    <div className='flex gap-5 items-center float-right'>
      <div className='flex gap-1'>
        <BsFillCartFill className='text-xl'/>
        <div className=''>$0.00</div>
      </div>
      <div className='flex gap-1 cursor-pointer'>
        <BsSearch className='text-xl' />
        <div className='text-base'>Search</div>
      </div>
    </div>
  </>
}

export const Menu: React.FC<any> = () => {
  const router = useRouter();

  return <>
    <div className='menu px-10'>
      <div className='menu-left'>
        <Link className='logo' href={router.basePath}>
          <Image
            src='/images/web-logo.png'
            width={229}
            height={50}
            alt="Advanced Lashes"
            className='cursor-pointer'
          />
        </Link>
        <MenuItems />
        <MenuUtil />
      </div>
    </div>
  </>
}

export const TopBar: React.FC<any> = () => {
  // const router = useRouter();
  const { data, error } = useSwr(
    `/api/contact`,
    fetcher
  )

  const facebookUrl = 'https://www.facebook.com/advancelashes/';

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <>
    <div className='flex justify-between'>
      <div className='contact pl-10'>
        <div className='contact-attribute'>
          <BsEnvelopeFill className='contact-icon' onClick={(e) => {
              window.location.href = data.email;
              e.preventDefault();
            }
          }/>
          <div className='contact-value cursor-pointer'>{ data.email }</div>
        </div>
        <div className='contact-attribute'>
          <BsPhoneFill className='contact-icon'/>
          <div className='contact-value'>{ data.phone }</div>
        </div>
        <div className='contact-attribute'>
          <BsClockFill className='contact-icon'/>
          <div className='contact-value'>{ data.schedule }</div>
        </div>
      </div>
      <div className='social'>
        <BsFacebook className='text-xl cursor-pointer text-slate-400' onClick={() => { window.open(facebookUrl, '_blank').focus(); }}/>
        <BsTwitter className='text-xl cursor-pointer text-slate-400'/>
      </div>
    </div>
  </>
}

export default Layout;

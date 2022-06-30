import useSwr from 'swr'
import { useRouter } from 'next/router'
import { BsFacebook, BsTwitter, BsFillCartFill, BsSearch } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose, AiFillClockCircle, AiFillPhone, AiFillMail } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import MenuItem from '../interfaces/menu-item'
import useSWR from 'swr'
import React, { useState, useEffect } from 'react'

export const fetcher = (url: string) => fetch(url).then((res) => res.json())

type Props = {
  children: React.ReactNode,
  home?: boolean
}

const Layout: React.FC<any>  = ({ children, home }: Props) => {
  const [lgScreen, setLgScreen] = useState(false)

  useEffect(() => {
    setLgScreen(window.innerWidth >= 1080);
  }, [])

  return <>
    <header className='page-header'>
      { lgScreen ? <TopBar /> : null }
      { lgScreen ? <Menu lgScreen={lgScreen}/> : <MobileMenu />}
    </header>

    <main className="w-100 page-content">
      { children }
    </main>


    <footer className="footer">
      <Link href="/">
        <a>
          <Image src='/images/logo.png' width={100} height={100} alt="Advanced Lashes"/>
        </a>
      </Link>
      <div className='footer-menu'>
        <div className='text-base'>2019 © Advance Lashes</div>
        <div className='menu-items'>
          <Link href='/'>
            <a>Home</a>
          </Link>
          |
          <Link href='/terms-conditions'>
            <a>Terms & Conditions</a>
          </Link>
          |
          <Link href='/privacy-policy'>
            <a>Privacy Policy</a>
          </Link>
          |
          <Link href='/shipping-policy'>
            <a>Shipping Policy</a>
          </Link>
          |
          <Link href='/contact'>
            <a>Contact Us</a>
          </Link>
        </div>
      </div>
    </footer>
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

export const MenuItems: React.FC<any> = ({ lgScreen }) => {
  const router = useRouter();
  const { data, isLoading, isError } = useMenu();

  if (isLoading) return <div>Loading..</div>
  if (isError) return <div>Error..</div>

  return <ul className="menu-items flex gap-5 mt-3">
    {
      data.map((menuItem: MenuItem) =>
        <li className={ router.pathname == menuItem.url ? 'nav-item active' : 'nav-item' } key={menuItem.url}>
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

export const MenuUtil: React.FC<any> = ({ lgScreen }) => {
  const [showMenuDialog, setShowMenuDialog] = useState(false);
  const openMenuDialog = () => setShowMenuDialog(true);
  const closeMenuDialog = () => setShowMenuDialog(false);

  return <>
    <div className='flex gap-5 items-center'>
      <div className='menu-util flex gap-5 items-center float-right'>
        <div className='flex gap-1'>
          <BsFillCartFill className='text-xl'/>
          <div className=''>$0.00</div>
        </div>
        <div className='flex gap-1 cursor-pointer'>
          <BsSearch className='text-xl' />
          <div className='text-base'>Search</div>
        </div>
      </div>
      {/* menu hambuger */}
      { showMenuDialog ?
        <div className="modal" id='menu-hambuger'>
          <div className='w-4/5 p-10 bg-white h-full float-right flex flex-col'>
            <div className='flex w-full justify-end'>
              <button
                className='bg-rose-500 text-white w-fit p-1 drop-shadow'
                onClick={() => {closeMenuDialog()}}
              >
                <AiOutlineClose className='text-2xl'/>
              </button>
            </div>
            <MenuItems />
            <div>
              <TopBar />
            </div>
          </div>
        </div> :
        null
      }
      {/* menu hambuger button */}
      { lgScreen ? null : <button onClick={() => {openMenuDialog()}}>
          <AiOutlineMenu className='text-3xl'/>
        </button>
      }
    </div>
  </>
}

export const Menu: React.FC<any> = ({ lgScreen }) => {
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
        <MenuUtil lgScreen={lgScreen}/>
      </div>
    </div>
  </>
}

export const MobileMenu: React.FC<any> = () => {
  const router = useRouter();

  return <>
    <div className='mobile-menu px-5 bg-slate-50 flex items-center'>
      <div className='menu-left'>
        <Link className='logo' href={router.basePath}>
          <Image
            src='/images/logo.png'
            width={40}
            height={40}
            alt="Advanced Lashes"
            className='cursor-pointer bg-white rounded-full ring-0 fill-slate-600'
            layout='intrinsic'
            priority
          />
        </Link>
        <MenuUtil lgScreen={false}/>
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
    <div className='top-bar flex justify-between'>
      <div className='contact pl-10'>
        <div className='contact-attribute'>
          <AiFillMail className='contact-icon' onClick={(e) => {
              window.location.href = data.email;
              e.preventDefault();
            }
          }/>
          <div className='contact-value cursor-pointer'>{ data.email }</div>
        </div>
        <div className='contact-attribute'>
          <AiFillPhone className='contact-icon'/>
          <div className='contact-value'>{ data.phone }</div>
        </div>
        <div className='contact-attribute'>
          <AiFillClockCircle className='contact-icon'/>
          <div className='contact-value overflow-auto'>{ data.schedule }</div>
        </div>
      </div>
      <div className='social text-xl text-slate-400'>
        <BsFacebook className='cursor-pointer' onClick={() => { window.open(facebookUrl, '_blank').focus(); }}/>
        <BsTwitter className='cursor-pointer'/>
      </div>
    </div>
  </>
}

export default Layout;

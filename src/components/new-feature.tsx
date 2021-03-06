import style from './new-feature.module.scss'
import Image from "next/image";
import { BsFillCartFill, BsFillBookmarkPlusFill } from 'react-icons/bs';
import { AiFillIdcard, AiFillGift } from 'react-icons/ai'
import Panel from "./panel";
import HoverBox from "./hover-box";
import PanelTitle from "./panel/panel-title";
import cn from 'classnames';
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from './Layout';
import { BestSelling } from '../pages/api/best-selling';
import Product from './product';
import FloatingButton from './floating-button';

export const NewFeature: React.FC<any>  = ({ lgScreen }) => {
  const hoverBoxFront = <Image src="/images/alisa.png" width={538} height={785} className="bg-transparent" />

  const hoverBoxBack = <div className="p-5 bg-slate-50 text-center justify-center flex flex-col gap-10 text-xl">
    <div className="text-4xl text-rose-500 font-bold">MASTER TRAINER - ALISA PHAN</div>
    <p>Yep – that’s me…</p>
    <p>Alisa Graduated from college and went on to Nursing School – while going to school, she worked Part-Time as a Nails Tech and Eyelash extensions artist. She fell in love with Eyelashes Extensions and decided to pursue more training to become a trainer. She had learned from more than 4 different instructors with a dedication in her time and commitment to enhancing the Lash Industry.</p>
    <p>Alisa became a certified trainer and has been into eyelashes service for about 6 years with thousands of trainees and now offers comprehensive training in ‘Classic Eyelash Extension Application’. As well attending Lash conferences to improve her skills, Alisa also provides helpful tips and blogs for those that are struggling in the art of Lashing, through the mainstream of social media.</p>
    <p>Alisa’s significant focus is striving for customer satisfaction by creating amazing Lashes, whilst also helping other lash artists.</p>
    <button
      className="flex text-3xl font-semi-bold gap-2 bg-gray-500 hover:bg-gray-600 p-3 text-white items-center start w-fit justify-self-center mx-auto"
      onClick={() => { location.href = 'mailto:contact@advancelashes.com' }}
    >
      <AiFillIdcard />
      <span>Contact me</span>
    </button>
  </div>

  return <>
    {/* course */}
    <div className={cn({
        ["new-feature flex items-center"]: true,
        ["flex-col justify-center"]: !lgScreen
      })}
    >
      <div className={["description flex flex-col items-center gap-3", lgScreen ? 'w-1/2' : 'w-full'].join(' ')}>
        <Image
          src="/images/feature.png"
          width={lgScreen ? 472 : 856}
          height={lgScreen ? 321 : 640}
          layout="intrinsic"
        />
        <div className={cn({
          ["flex gap-5 text-white text-xl font-bold"]: true,
          ["flex-col"]: !lgScreen
        })}>
          <button className="bg-green-600 hover:bg-green-500 p-5 flex gap-2 justify-center">
            <BsFillCartFill className="text-2xl" />
            <span>REGISTRATION</span>
          </button>
          <button className="bg-neutral-500 hover:bg-neutral-400 p-5 flex gap-2 justify-center">
            <BsFillBookmarkPlusFill className="text-2xl"/>
            <span>ACADEMY</span>
          </button>
        </div>
      </div>
    </div>

    {/* Description */}
    <div className={cn({
        ["description flex"]: true,
        ['flex-col']: !lgScreen
      })}
    >
      <div className={cn({
          ["w-1/2"]: lgScreen,
          ["w-full"]: !lgScreen
        })}
      >
        <HoverBox front={hoverBoxFront} back={hoverBoxBack} />
        <PanelTitle title="Master Trainer - Alisa Phan" />
      </div>
      <div className={cn({
          ["w-1/2 pl-10"]: lgScreen,
          ["w-full mt-5"]: !lgScreen
        })}
      >
        <Panel title="What We do" titleAlign="text-left">
          <div className="text-2xl flex flex-col gap-10 text-neutral-500 leading-9">
            <p><strong>AdvanceLashes</strong> distributes leading eyelash extensions, and eyelash products to Lash Artists, Salons, and stores throughout United States. <strong>AdvanceLashes</strong> has emerged to meet the demand for premium quality products within and outside United States.</p>
            <p><strong>AdvanceLashes</strong> key focus is to help other lash artists; this is achieved by making available a great range of products with fast delivery and exceptional customer service. <strong>AdvanceLashes</strong> products are made of the best quality and have all been tested to ensure quality and integrity to United States standards.</p>
            <p>If you are lash salon owner or artists who values quality and will not compromise your workmanship or integrity of your own talents, then you will feel satisfied knowing your products from <strong>AdvanceLashes</strong> will only further aid your business.</p>
            <b>Our Mission</b>
            <p>To provide the highest quality and most innovative eyelash extension products at an affordable price. We believe that making the extension process more efficient means that extensions can be done faster at low price, drawing even more consumers to the market. We are committed to making each AdvanceLashes customer loyal to the brand by providing a memorable experience through great prices, great products and great customer service.</p>
            <b>Our Core Values</b>
            <ul className="list-disc">
              <li>Be adventurous, Creative, and open-minded</li>
              <li>Create long-term Relationships with Our Customers</li>
              <li>Pursue Growth and Learning</li>
              <li>Inspire Happiness and positivity</li>
              <li>Make certain Our Customers are pleased</li>
            </ul>
          </div>
        </Panel>
      </div>
    </div>

    {/* Shop */}
    <div className={cn({[style.shop]: true})}>
      <div className={cn({
            ["flex"]: true,
            ["flex-col"]: !lgScreen
          })}>
        <div className={cn({
            ["w-1/2"]: lgScreen,
            ["w-full mt-5"]: !lgScreen
          })}
        >
          <Panel title="AdvanceLashes Shop" titleAlign="text-left">
            <div className='text-2xl mt-20 text-slate-400'>
              <p>We provide the highest quality and most innovative eyelash extension products at an affordable price. We believe that making the extension process more efficient means that extensions can be done faster at low price, drawing even more consumers to the market. We are committed to making each AdvanceLashes customer loyal to the brand by providing a memorable experience through great prices, great products and great customer service.</p>
            </div>
          </Panel>
        </div>
        <div className={cn({
            ["w-1/2 pl-10"]: lgScreen,
            ["w-full mt-5"]: !lgScreen
          })}
        >
          <Link href="/shop">
            <a>
              <Image src="/images/shop.png" width={540} height={360} alt="shop" />
            </a>
          </Link>
        </div>
      </div>
    </div>

    {/* best selling */}
    <div className='best-selling mt-10 justify-center flex flex-col items-center'>
      <PanelTitle title="Best Selling Products" className="w-fit"/>
      <BestSellingContent lgScreen={lgScreen}/>
    </div>

    {/* reward button */}
    <FloatingButton className={cn({
        ["top-1/2"]: lgScreen,
        [style.rewardButton]: lgScreen,
        ['right-5 bottom-3']: !lgScreen,
      })}
      position="static"
    >
      <button className={['flex text-white text-4xl font-bold bg-black p-3 items-center gap-2', lgScreen ? '' : 'rounded-full'].join(' ')}>
        <AiFillGift />
        { lgScreen ? 'REWARD' : null }
      </button>
    </FloatingButton>
  </>
}

const useBestSellings = () => {
  const { data, error } = useSWR(`/api/best-selling`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export const BestSellingContent:  React.FC<any>  = ({ lgScreen }) => {
  const { data, isLoading, isError } = useBestSellings();

  if (isLoading) return <div>Loading..</div>
  if (isError) return <div>Error..</div>

  return <>
    <div className={cn({
      ['mt-10 grid grid-cols-4 gap-4 px-5']: true,
      ['grid-cols-1']: !lgScreen
    })}>
    {
      data.map((item: BestSelling) => {
        return <>
          <Product
            name={item.name}
            url={item.url}
            price={item.price}
            imageUrl={item.image_url}
          />
        </>
      })
    }
    </div>
  </>
}

export default NewFeature;

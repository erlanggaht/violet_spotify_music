import CardDiscoverGenre from '@/app/violet_spotify_music_components_submodule/card-discover-genre'
import CardTopMusic from '@/app/violet_spotify_music_components_submodule/card-top-music'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Dashboard() {
  return (
    <main className='px-16 overflow-auto max-h-[820px]'>
      <div className='flex items-center gap-8'>
        <Image alt='music_discover_genre' src={'/icon/music_discover_genre.svg'} width={24} height={24} />
        <h1 className='text-2xl font-semibold tracking-wider leading-8'>Discover Genre</h1>
      </div>
      <div id='DiscoverGenre' className='grid grid-cols-4 gap-7 mt-10  max-h-[820px]'>
        {
          cardDiscoverGenre.map((card,index) => {
            return (
              <CardDiscoverGenre key={index} title={card.title} description={card.description} />
            )
          })
        }
      </div>

      <div className='flex items-center justify-between mt-16 '>
        <div className='flex items-center gap-6'>
          <Image alt='headset_top_music' src={'/icon/headset_top_music.svg'} width={24} height={24} />
          <h1 className='text-2xl font-semibold tracking-wider leading-8'>Top Music</h1>
        </div>
        <div className='relative'>
          <Link href="#" className='base_gradient_text'>Read More {'>>'}</Link>
          <div className='bg-gradient-to-r from-[#b5179e] to-[#7209b7] h-[1px]'></div>
        </div>
      </div>

      <div id='TopMusic' className='mt-10 overflow-auto  max-h-[280px]'>
        {['01','02','03','04'].map((item,index) => {
          return (
            <CardTopMusic key={index} textNumber={item}/>
          )
        })}
      </div>
    </main>
  )
}

export const cardDiscoverGenre = [
  {
    title: "Accoustic",
    description: "120 Track",
  },
  {
    title: "Rock",
    description: "11 Track",
  },
  {
    title: "Dangdut",
    description: "30 Track",
  },
  {
    title: "Dangdut",
    description: "30 Track",
  }
]



export default Dashboard

import React from 'react'
import SoundIcon from '@/../public/icon/sound.svg'
import Image from 'next/image'
function HeaderLayout() {
  return (
    <header className='flex w-full'>
        <div className='flex-grow-0 w-header_left_right'>
            <div className='flex items-center gap-5'>
            <Image src={'/icon/sound.svg'} alt='sound' width={41} height={43} />
            <h1 className='title-header'>SpotifyMe</h1>
            </div>
        </div>
        <div className='flex-grow'>Search</div>
        <div className='flex-grow-0 w-header_left_right'>Profile</div>
    </header>
  )
}

export default HeaderLayout

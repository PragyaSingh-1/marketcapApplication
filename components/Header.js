import React from 'react'
import Image from 'next/image'

const Styles = {
    header: "bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px] items-center",
}

function Header() {
  return (
    <div className={Styles.header}>
      <img className='w-11 h-11 ' src="https://crypto-central.io/library/uploads/CoinMarketCap-Logo.png"
      
      />
      
    </div>
  )
}

export default Header
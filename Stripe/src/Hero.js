import React, { useEffect } from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
const Hero = () => {
  const {closeSubmenu} = useGlobalContext();

  const closeMenu = () => {
    closeSubmenu();
  }

  return (
    <section className='hero' onMouseOver={closeMenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>Millions of companies of all sizes-from startups to Fortune 500s-use
            Stripe's software and APIs and accept payments, send payouts and manage their business online
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  )
}

export default Hero

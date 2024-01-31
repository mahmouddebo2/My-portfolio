import  './hero.css'
import Lottie from "lottie-react";
import heroAnimation from "../../animation/developer.json"

export default function Hero() {
  return (
    <section className='hero flex'>
      <div className='left-section '>
<div className='parent-avatar flex'>
<img src="./me.png" alt="Mahmoud Avatar" className='avatar'/>
<div className='icon-verified'/>
</div>
<h1 className='title'>Frontend Developer  </h1>
      <p className='subtitle'>Dedicated and skilled Frontend Developer with a passion for creating responsive and user-friendly web
applications using React JS And Next JS With more than a year of experience in the field, I have a proven track
Record of delivering high-quality software solutions for clients across various industries. My expertise extends to
Crafting visually engaging and interactive interfaces that enhance the overall user experience.
</p>
<div className="social-icons flex">
<div className=' icon icon-twitter'></div>
<div className='icon icon-instagram'></div>
<div className='icon icon-github'></div>
<div className='icon icon-linkedin'></div>
</div>
      </div>
      <div className='right-section animation  '>
      <Lottie className='heroanimation'   animationData={heroAnimation} />

      </div>
    </section>
  )
}

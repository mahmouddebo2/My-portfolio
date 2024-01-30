import  './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json"
import emailAnimation from "../../animation/email.json"
export default function Contact() {
  const [state, handleSubmit] = useForm("mjvngjdo");
 

  return (
    <section className='contact-us'>
      <h2 className='title'>
      <span className='icon-envelope'></span>
      Contact us
      </h2>
      <p className='description'>Contact us for more information and Get notified when I puplish something new.</p>

    <div className="flex" style={{justifyContent:'space-between' , alignItems:"center"}}>
      <form  onSubmit={handleSubmit}>
        <div className='flex'>
        <label htmlFor="email">Email Address:</label>
        <input required type="email" id='email' name='email'  />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}/>
        </div>

       <div className='flex' style={{marginTop:"24px"}}>
       <label htmlFor="message">Your message:</label>
        <textarea required name="message" id="message" ></textarea>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
       </div>
        <button className='submit' type="submit" disabled={state.submitting}>
          {state.submitting ? "submitting..." : "Submit"}
        </button>
        {state.succeeded && (
          <p className="flex"
          style={{ fontSize: "18px", marginTop: "1.7rem" }}>
            <Lottie loop={false}  style={{ height: 37 }} animationData={doneAnimation} />
            
            Your Message has been sent Successfully  👌</p>
        )}
      </form>
      <div className="animation " style={{position:"relative" , bottom:"3rem"}}>
        
      <Lottie  className='contact-animation'  style={{ height: 350  }} animationData={emailAnimation} />

      </div>
    </div>
    </section>
  )
}

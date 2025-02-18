import React, { useState } from 'react'
import '../Style/Contact.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-scroll';

const Contact = () => {

  const [click , setClick] = useState(false)
  const closeMenu = () => setClick(false)

  const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isSubmitting },
      reset,
    } = useForm();
  
    const onSubmit = async (data) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(data);
      reset();
    };

  // const [bgcolor , setBgcolor] = useState(false)
    

  return (
    <>
      <div className="contact" id="contact">
        <h2>Contact <span>Us</span> </h2>
        <div className="contact_main">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* action="https://api.web3forms.com/submit" method="POST">
           <input type="hidden" name="access_key" value="2324654c-6bdd-4987-aebf-0fd1843bd110"/> */}
            <input type="text" id='firstName' placeholder={errors.firstName ? "Please Enter Your Full Name " : 'Enter Your Full Name'} 
              className={errors.firstName ? "error-placeholder" : "normal-placeholder"}
              {...register("firstName", {
                required:{
                  value: true,
                  message: "Enter your FirstName Name",
                },
              })} 
            />                
            <br />
            <input type="text" id='email' placeholder={errors.email ? "Please Enter Your Email" : 'Enter Your Email'} 
              className={errors.email ? "error-placeholder" : "normal-placeholder"}
              {...register("email", {
                required:{
                  value: true,
                  message: "Enter your email",
                },
              })}
            />                
            <br />
            <input type="text" id='phone' placeholder={errors.phone ? "Please Enter Your Phone Number" : 'Enter Your Phone Number'} 
              className={errors.phone ? "error-placeholder" : "normal-placeholder"} 
              {...register("phone", {
                required:{
                  value: true,
                  message: "Enter your Number",
                },
              })}
            />
            <br />
            <textarea name="text" id="notes" placeholder={errors.notes ? "Please Enter Sum Notes" : 'Enter Your Notes'} 
              className={errors.notes ? "error-placeholder" : "normal-placeholder"}
              {...register("notes", {
                required:{
                  value: true,
                  message: "Enter Sum Notes",
                },
              })}>  
            </textarea>
            <button type='submit' className={isSubmitting ? "hoverbutton" : ""} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        <Link to='home' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
          <button className='contact-btnn2'>
            <i class="bi bi-arrow-up"></i>
          </button>
        </Link>
      </div>
    </>
  )
}

export default Contact
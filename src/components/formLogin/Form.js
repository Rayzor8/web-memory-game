import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { formContext, useFormContext } from '../../context/FormContext';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './formStyle.css';
import swal from 'sweetalert';

const Form = () => {
   const { page, setPage, formData } = useFormContext();
   console.log(page)
   useEffect(() => {
      Aos.init({ duration: 1500, once: true });
   }, []);

   let navigate = useNavigate();
   const formTitles = ['Sign Up', 'Personal Info', 'Other'];

   const buttonHandler = () => {
      if (page === formTitles.length - 1) {
         Object.values(formData).map((value) => {
            if (value && value.length > 4) {
               return swal({
                  title: 'Success',
                  text: 'Press Enter key to start the game',
                  icon: 'success',
                  button: 'Enter',
               }).then(() => {
                  navigate('/game');
               });
            } else {
               return swal({
                  title: 'Please fill all fields',
                  icon: 'error',
                  timer: 2000,
                  button: 'Back',
               });
            }
         });

         return formTitles.length - 1;
      }
      setPage((prev) => prev + 1);
   };

   const pageDisplayHTML = () => {
      if (page === 0) return <SignUpInfo />;
      if (page === 1) return <PersonalInfo />;
      return <OtherInfo />;
   };

   return (
      <section className="login_container" data-aos="fade-right">
         <h1 className="login_title">Rayzor Game</h1>
         <div className="form">
            <div className="progress_bar">
               <div
                  style={{
                     width: page === 0 ? '33%' : page === 1 ? '66%' : '100%',
                  }}
               ></div>
            </div>
            <div className="form_container">
               <div className="header">
                  <h1>{formTitles[page]}</h1>
               </div>
               <div className="body">{pageDisplayHTML()}</div>
               <div className="footer">
                  <button
                     onClick={() => setPage((prev) => prev - 1)}
                     disabled={page === 0}
                  >
                     Prev
                  </button>
                  <button
                     onClick={buttonHandler}
                     type={page === formTitles.length - 1 ? 'submit' : 'button'}
                  >
                     {page === formTitles.length - 1 ? (
                        <span className="submit">Submit</span>
                     ) : (
                        <span>Next</span>
                     )}
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Form;

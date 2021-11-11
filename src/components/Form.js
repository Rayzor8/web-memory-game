import React, { useState } from 'react';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';

const Form = () => {
   const [page, setPage] = useState(0);

   const formTitles = ['Sign Up', 'Personal Info', 'Other'];
   const pageDisplayHTML = () => {
      if (page === 0) return <SignUpInfo />;
      if (page === 1) return <PersonalInfo />;
      return <OtherInfo />;
   };

   return (
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
                  onClick={() => setPage((prev) => prev + 1)}
                  disabled={page === formTitles.length - 1}
               >
                  Next
               </button>
            </div>
         </div>
      </div>
   );
};

export default Form;
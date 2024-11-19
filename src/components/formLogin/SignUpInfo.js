import React, { useContext } from 'react';
import { formContext } from '../../context/FormContext';

const borderStyle = {
   normal: '2px solid rgb(98, 0, 255)',
   success: '3px solid green',
};
const SignUpInfo = () => {
   const { formData, setFormData } = useContext(formContext);
   return (
      <form className="sign_up_container">
         <label>Input data minimum 4 characters</label>
         <input
            type="email"
            placeholder="Email..."
            value={formData.email}
            onChange={(e) =>
               setFormData({ ...formData, email: e.target.value })
            }
            className={formData.email.length > 3 ? 'borderInputSuccess' : 'borderInput'}
         />
         <input
            type="password"
            placeholder="Password..."
            value={formData.password}
            onChange={(e) =>
               setFormData({ ...formData, password: e.target.value })
            }
            className={formData.password.length > 3 ? 'borderInputSuccess' : 'borderInput'}
         />
      </form>
   );
};

export default SignUpInfo;

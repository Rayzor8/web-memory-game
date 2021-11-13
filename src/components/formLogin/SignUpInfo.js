import React, { useContext } from 'react';
import { formContext } from '../../context/FormContext';


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
            style={
               formData.email.length < 4
                  ? { border: '2px solid rgb(98, 0, 255)' }
                  : { border: '3px solid green' }
            }
         />
         <input
            type="password"
            placeholder="Password..."
            value={formData.password}
            onChange={(e) =>
               setFormData({ ...formData, password: e.target.value })
            }
            style={
               formData.password.length < 4
                  ? { border: '2px solid rgb(98, 0, 255)'}
                  : { border: '3px solid green' }
            }
         />
         <input
            type="password"
            placeholder="Confirm Password..."
            value={formData.confirmPassword}
            onChange={(e) =>
               setFormData({ ...formData, confirmPassword: e.target.value })
            }
            style={
               formData.confirmPassword.length < 4
                  ? { border: '2px solid rgb(98, 0, 255)' }
                  : { border: '3px solid green' }
            }
         />
      </form>
   );
};

export default SignUpInfo;

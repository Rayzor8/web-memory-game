import React, { useContext } from 'react';
import { formContext } from '../../context/FormContext';

const PersonalInfo = () => {
   const { formData, setFormData } = useContext(formContext);
   return (
      <form className="personal_info_container ">
         <label>Input data minimum 4 characters</label>
         <input
            type="text"
            placeholder="First Name.."
            value={formData.firstName}
            onChange={(e) =>
               setFormData({ ...formData, firstName: e.target.value })
            }
            className={
               formData.firstName.length > 3
                  ? 'borderInputSuccess'
                  : 'borderInput'
            }
         />
         <input
            type="text"
            placeholder="Last Name.."
            value={formData.lastName}
            onChange={(e) =>
               setFormData({ ...formData, lastName: e.target.value })
            }
            className={
               formData.lastName.length > 3
                  ? 'borderInputSuccess'
                  : 'borderInput'
            }
         />
         <input
            type="text"
            placeholder="Username.."
            value={formData.username}
            onChange={(e) =>
               setFormData({ ...formData, username: e.target.value })
            }
            className={
               formData.username.length > 3
                  ? 'borderInputSuccess'
                  : 'borderInput'
            }
         />
      </form>
   );
};

export default PersonalInfo;

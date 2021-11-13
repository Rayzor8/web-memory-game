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
            style={
               formData.firstName.length < 4
                  ? { border: '2px solid rgb(98, 0, 255)' }
                  : { border: '3px solid green' }
            }
         />
         <input
            type="text"
            placeholder="Last Name.."
            value={formData.lastName}
            onChange={(e) =>
               setFormData({ ...formData, lastName: e.target.value })
            }
            style={
               formData.lastName.length < 4
                  ? { border: '2px solid rgb(98, 0, 255)' }
                  : { border: '3px solid green' }
            }
         />
         <input
            type="text"
            placeholder="Username.."
            value={formData.username}
            onChange={(e) =>
               setFormData({ ...formData, username: e.target.value })
            }
            style={
               formData.username.length < 4
                  ? { border: '2px solid rgb(98, 0, 255)' }
                  : { border: '3px solid green' }
            }
         />
      </form>
   );
};

export default PersonalInfo;

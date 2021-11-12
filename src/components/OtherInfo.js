import React, { useContext } from 'react';
import { formContext } from '../context/FormContext';
const OtherInfo = () => {
   const { formData, setFormData } = useContext(formContext);
   return (
      <form className="other_info_container">
         <label>Input data minimum 4 characters</label>
         <input
            type="text"
            placeholder="Nationality..."
            value={formData.nationality}
            onChange={(e) =>
               setFormData({ ...formData, nationality: e.target.value })
            }
            style={
               formData.nationality.length < 4
                  ? { border: '2px solid rgb(98, 0, 255)' }
                  : { border: '3px solid green' }
            }
         />

      </form>
   );
};

export default OtherInfo;

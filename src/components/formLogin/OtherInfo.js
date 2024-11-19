import React, { useContext } from 'react';
import { formContext } from '../../context/FormContext';
const OtherInfo = () => {
   const { formData, setFormData } = useContext(formContext);
   return (
      <form className="other_info_container">
         <label htmlFor="cars">Choose Nationality:</label>
         <select
            name="nationality"
            id="nationality"
            value={formData.nationality}
            onChange={(e) =>
               setFormData({ ...formData, nationality: e.target.value })
            }
         >
            <optgroup label="Nationality">
               <option value="">Select Nationality</option>
               <option value="indonesia">Indonesia</option>
               <option value="others">Others</option>
            </optgroup>
         </select>
      </form>
   );
};

export default OtherInfo;

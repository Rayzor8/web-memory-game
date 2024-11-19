import { createContext, useContext, useState } from 'react';
export const formContext = createContext(null);

const FormContextProvider = ({ children }) => {
   const [page, setPage] = useState(0);

   const [formData, setFormData] = useState({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      username: '',
      nationality: '',
   });

   return (
      <formContext.Provider value={{ formData, setFormData, page, setPage }}>
         {children}
      </formContext.Provider>
   );
};

export default FormContextProvider;

export const useFormContext = () => useContext(formContext);

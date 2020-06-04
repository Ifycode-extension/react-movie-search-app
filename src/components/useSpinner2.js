import React, { useState } from 'react';
import Spinner2 from './Spinner2';

const useSpinner2 = prop  => {
   const [visible, setVisible] = useState(false);
   
   const showSpinner2 = () => setVisible(true);
   const hideSpinner2 = () => setVisible(false);
   const spinner2 = visible ? <Spinner2/> : null;

   return [spinner2, showSpinner2, hideSpinner2];
}

export default useSpinner2;
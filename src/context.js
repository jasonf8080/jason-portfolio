import React, { createContext, useState, useContext, useEffect } from 'react';

const MyContext = createContext();

// Create a provider component
const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState('hello');

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const navbar = document.querySelector('#navbar')

    if(showMenu){
      document.body.style.overflow = 'hidden'

     sections.forEach((section) => {
        section.style.filter = 'blur(10px)'
     })

     navbar.style.filter = 'blur(10px)'
    } else {
       document.body.style.overflow = 'auto'
      sections.forEach((section) => {
       section.style.filter = 'none'
     })

      navbar.style.filter = 'none'
    }
  }, [showMenu])




    
      
  return (
    <MyContext.Provider value={{
      showMenu, setShowMenu
       }}>
      {children}
    </MyContext.Provider>
  );
};



// Create a custom hook for using the context
const useGlobalContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export { ContextProvider, useGlobalContext };



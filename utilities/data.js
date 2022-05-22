import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [ contact, openContact ] = useState(false)
    const [ starred, setStarred ] = useState([])

    return (
        <DataContext.Provider
      value={{contact, openContact, starred, setStarred}}>
          {props.children}
      </DataContext.Provider>
    )
}
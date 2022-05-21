import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [ contact, openContact] = useState(false)

    return (
        <DataContext.Provider
      value={{contact, openContact}}>
          {props.children}
      </DataContext.Provider>
    )
}
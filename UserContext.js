// UserContext.js

import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [userName, setUserName] = useState(null);
  const [password, setUserPassword] = useState(null);
  const [fullname, setUserFullname] = useState(null);
  const [birthday, setUserBirthday] = useState(null);
  const [email, setUserEmail] = useState(null);

  return (
    <UserContext.Provider
      value={{
        userName,
        password,
        fullname,
        birthday,
        email,
        setUserName,
        setUserPassword,
        setUserFullname,
        setUserBirthday,
        setUserEmail,
      }}>
      {children}
    </UserContext.Provider>
  );
};

import { useEffect, useState, createContext } from 'react'
import { userInfoInterface } from '@/interfaces/user'
import fetchData from '@/utils/fetch'
import { API_SERVER } from '@/const/api'

const AuthContext = createContext({
  token: '',
  loggedIn: false,
  expTime: 0,
  userInfo: {
    uuid: '',
    avatar: '',
    username: '',
    phone: undefined,
    qq: undefined,
    iksm: true,
    register_time: '',
  },
})

const AuthProvider = (props: any) => {
  const [token] = useState<string>(localStorage.getItem('token') || '')
  const [expTime] = useState<number>(Number(localStorage.getItem('expTime')) || 0)
  const [loggedIn, setLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState<userInfoInterface>({
    uuid: '',
    avatar: '',
    username: '',
    phone: undefined,
    qq: undefined,
    iksm: true,
    register_time: '',
  })

  useEffect(() => {
    if (token !== '' && expTime > new Date().getTime()) {
      fetchData(`${API_SERVER}/user/userinfo`, 'GET', { token: token })
        .then((userInfoData: userInfoInterface) => setUserInfo(userInfoData))
        .then(() => {
          setLoggedIn(true)
        })
    } else {
      setLoggedIn(false)
    }
  }, [token, expTime])

  return <AuthContext.Provider value={{ token, userInfo, loggedIn }} {...props} />
}

export { AuthContext, AuthProvider }

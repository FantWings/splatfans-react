// 服务器端返回的标准Interface
interface standerdResponse {
  data: any
  msg: string
  status: number
}

const fetchData = (url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', headers?: object, body?: object) => {
  return fetch(url, {
    method: method || 'GET',
    headers: method === 'GET' ? { ...headers } : { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body) || undefined,
  })
    .then(
      (response) => {
        const { status } = response
        switch (status) {
          case 200:
            return Promise.resolve(response.json())
          case 400:
            return Promise.reject({ msg: '请求包含语法错误或无法完成请求！', status })
          case 404:
            return Promise.reject({ msg: '请求的资源未找到！', status })
          case 500:
            return Promise.reject({ msg: '服务器在处理请求的过程中发生了错误', status })
          case 405:
            return Promise.reject({ msg: '请求方式不被允许', status })
          default:
            return Promise.reject({ msg: '未知错误，请求失败', status })
        }
      },
      (response) => ({ status: 1, msg: '与服务器通讯失败', reason: response })
    )
    .then(
      ({ data, status, msg }: standerdResponse) => {
        switch (status) {
          case 0:
            return Promise.resolve(data)
          case 10:
            localStorage.clear()
            return Promise.reject({ status: 10, msg: '登录失效' })
          default:
            return Promise.reject({ status, msg })
        }
      },
      ({ msg, status }: { msg: string; status: Number }) => {
        return Promise.reject({ status, msg })
      }
    )
}

export default fetchData

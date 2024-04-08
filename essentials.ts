type TEssential = {
  window: any
  data: {
    envs: any
    APIS: any
    user: {
      token: string
      id: string
    }
  }
}

function essential(data: TEssential) {
  /* const window: Window = data.window */
  data.window.essentialData = data.data
  return "Do Nothing"
  /* data.window.essentialData.APIS.API_BUILDER.defaults.headers[":path:"] = "0" */
  /* data.window.essentialData.APIS.API_BUILDER.defaults.timeout = 1 */
  /* data.window.essentialData.APIS.API.defaults.transformRequest = (data, headers) => {
    headers.Authorization = "Teste"
    console.log({ data, headers })
  } */
  /* const html = win.document.querySelector("html")
  if (html) {
    html.remove?.()
  }
  return "Foi" */
}
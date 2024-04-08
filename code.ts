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
  data.window.essentialData = data.data
  return "Do Nothing"
}
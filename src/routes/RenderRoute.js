import React from "react"

const Home = React.lazy(()=>import("../pages/Home"))
export const RenderRoute = [
    {
      id:1,
      path:"/",
      component:Home
    }
]
import React from 'react'
import { Routes, Route } from "react-router-dom"
import { RenderRoute } from "./RenderRoute"
import Loading from '../components/important/Loading'
const index = () => {
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          {RenderRoute.map((value) => {
            return <Route key={value.id} element={<value.component />} path={value.path} />
          })}
        </Routes>
      </React.Suspense>

    </>
  )
}

export default index
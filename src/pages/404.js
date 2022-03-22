import * as React from "react"
import { navigate } from "gatsby"
import Background from '../components/Background'
import Footer from '../components/Footer'

const NotFoundPage = () => {
  return (
    <main style={{
      positin: "fixed",
      width: "100%",
      height: "100vh",
      margin: 0,
      padding: 0,
      top: 0,
      left: 0
    }}>
      <title>Not found</title>
        <Background />
        <div
          style={{ 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            cursor: "pointer"
          }}
          onClick={() => {
            navigate('/')
          }}
        >
          <p
            style={{
              padding: 0,
              margin: 0,
              color: "white",
              fontSize: "40px"
            }}
          >Page not Found</p>
        </div>
        <Footer />
    </main>
  )
}

export default NotFoundPage

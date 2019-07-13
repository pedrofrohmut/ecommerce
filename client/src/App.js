import React from "react"
import SignUpForm from "./pages/SignUpForm"
import PageContainer from "./components/globals/PageContainer"

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <PageContainer>
        <SignUpForm />
      </PageContainer>
    </div>
  )
}

export default App

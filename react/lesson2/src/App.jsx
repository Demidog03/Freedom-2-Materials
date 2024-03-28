import { useState } from 'react'
import './App.css'
import ConditionalComponent1 from './components/conditional_components/ConditionalComponent1'
import ConditionalComponent2 from './components/conditional_components/ConditionalComponent2'
import ConditionalComponent3 from './components/conditional_components/ConditionalComponent3'
import ConditionalComponent4 from './components/conditional_components/ConditionalComponent4'
import ReusableComponent from './components/reusable_components/ReusableComponent'
import LifecycleComponent from './components/lifecycle-useeffect/LifecycleComponent'
import SideEffectsComponents from './components/lifecycle-useeffect/SideEffectsComponents'

function App() {
  const [componentIsVisible, setComponentIsVisible] = useState(true)

  function deleteComponent() {
    setComponentIsVisible(false)
  }
  return (
    <>
      <button onClick={deleteComponent}>Убрать компонент</button>
      {componentIsVisible ? <LifecycleComponent /> : null}
      <SideEffectsComponents />
    </>
  )
}

export default App

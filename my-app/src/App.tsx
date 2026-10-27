
import './App.css'
import Drink from './components/Drink';
import Greet from './components/Greet'
import Greet2 from './components/Greet2'
import InputValue from './components/InputValue';

function App() {

  // 함수 정의 - props로 전달
  const doClick = () => {
    alert("안녕하세요?");
  }

  return (
    <>
      <section className="app">
        <h2>React 기초 문법(TypeScript기반)</h2>
        {/* <Greet
          name="도경수"
          age={33}
        /> */}
        {/* <Greet2
          name="도경수"
          age={33}
          doClick = {doClick}
        /> */}
        {/* <InputValue /> */}
        <Drink />
      </section>
    </>
  )
}

export default App

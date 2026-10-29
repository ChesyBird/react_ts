
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Posts from './posts/Posts';
import PostDetail from './posts/PostDetail';
import AddPost from './posts/AddPost';

function App() {

  // 함수 정의 - props로 전달
  const doClick = () => {
    alert("안녕하세요?");
  }

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Posts />} />
            <Route path='/posts/:id' element={<PostDetail />} />
            <Route path='/posts/add' element={<AddPost />} />
          </Routes>
        </BrowserRouter>
        {/* <Todos /> */}
        {/* <Memo /> */}
        {/* <Card title="공지사항">
          <p>내일은 TypeScript 시험이 있습니다.</p>
        </Card>
        <Card title="오늘의 할 일">
        <ul>
          <li>props 타입 복습</li>
          <li>children 예제 실습</li>
        </ul>
        </Card> */}
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
        {/* <Drink /> */}
        {/* 태그 사이에 있는 내용이 Box의 children으로 전달됨 */}
        {/* <Box>
          <h3>박스 안의 내용</h3>
          <p>이것은 Box 컴포넌트 안에 있는 내용.</p>
        </Box>
        <Box>
          <h3>또 다른 박스</h3>
          <p>이것은 또 다른 Box 컴포넌트 안에 있는 내용.</p>
        </Box> */}
      </section>
    </>
  )
}

export default App

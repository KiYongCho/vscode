// React Router DOM
// - 경로별 컨텐츠 또는 페이지를 설정할때 사용
// - BrowserRouter 컴포넌트 또는 HashRouter 컴포넌트로 App 컴포넌트를 감싸줌
// - BrowserRouter : 웹브라우져 기반의 라우터
// - HashRouter : 웹서버가 다른 URL호출시 동일한 페이지를 보여줄 수 없는
//                경우에만 사용 (주소앞에 /#/이 붙음)
// - Routes컴포넌트 : Route들의 모임
// - Route컴포넌트 : path(경로)와 element(컴포넌트)
// - Link컴포넌트 : to(경로), a엘리먼트는 페이지가 리로딩되므로 
//                 Link컴포넌트를 사용해서 리로딩을 방지
// - NavLink컴포넌트 : Link의 업그레이드 버젼, 만들어질때 현재 경로에
//                    해당하는 NavLink의 clss속성이 active로 설정됨
// - useParams훅 : 라우팅시 파라미터들의 정보를 가진 훅

import {Routes, Route, Link, NavLink, useParams} from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <p>

          <a href='/'>Home</a>&nbsp;
          <a href='/javascript'>Javascript</a>&nbsp;
          <a href='/typescript'>Typescript</a>&nbsp;
          <a href='/react'>React</a><br />

          <Link to='/'>Home</Link>&nbsp;
          <Link to='/javascript'>Javascript</Link>&nbsp;
          <Link to='/typescript'>Typescript</Link>&nbsp;
          <Link to='/react'>React</Link><br />

          <NavLink to='/'>Home</NavLink>&nbsp;
          <NavLink to='/javascript'>Javascript</NavLink>&nbsp;
          <NavLink to='/typescript'>Typescript</NavLink>&nbsp;
          <NavLink to='/react'>React</NavLink><br />

        </p>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/javascript' element={<Javascript />} />
        <Route path='/javascript/*' element={<Javascript />} />
        <Route path='/typescript' element={<Typescript />} />
        <Route path='/react' element={<React />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home 페이지</h2>
    </div>
  );
}

function Javascript() {
  return (
    <>
      <div>
        <h2>Javascript 페이지</h2>
        <p>
          <NavLink to='/javascript/1'>sub1</NavLink>&nbsp;
          <NavLink to='/javascript/2'>sub2</NavLink>
        </p>
      </div>
      <Routes>
        <Route path='/:pid' element={<JavascriptSub />} />
      </Routes>
    </>
  );
}

function JavascriptSub() {
  const params = useParams();
  const pid = params.pid;
  if (pid==1 || pid==2) {
    return (
      <div>
        <h3>Javascript 서브페이지 {pid}</h3>
      </div>
    );
  } else {
    return (
      <NotFound />
    );
  }
}

function Typescript() {
  return (
    <div>
      <h2>Typescript 페이지</h2>
    </div>
  );
}

function React() {
  return (
    <div>
      <h2>React 페이지</h2>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>404 Not Found! 페이지를 찾을 수 없어용~!</h2>
    </div>
  );
}

export default App;

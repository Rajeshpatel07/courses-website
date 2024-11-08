import { Header } from './components'
import { Route, Routes } from 'react-router-dom'
import { Blog, Blogs, Course, Courses, Dashboard, Home, Login, NewBlog, NewCourse, Signup } from './pages'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blog/new' element={<NewBlog />} />
        <Route path='/course/new' element={<NewCourse />} />
        <Route path='/blog/:blogId' element={<Blog />} />
        <Route path='/course/:courseId' element={<Course />} />
      </Routes >
    </>
  )
}
export default App

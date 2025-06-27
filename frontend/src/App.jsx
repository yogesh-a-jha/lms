import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { Route, Routes, useMatch, useMatches } from 'react-router-dom'
import Home from './pages/students/Home'
import CoursesList from './pages/students/CoursesList'
import CourseDetails from './pages/students/CourseDetails'
import MyEnrollments from './pages/students/MyEnrollments'
import Player from './pages/students/Player'
import Loading from './components/students/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentEnrolled'
import Navbar from './components/students/Navbar'
import "quill/dist/quill.snow.css";

const App = () => {

  // const {value} = useContext(AppContext)

  const isEducatorRoute = useMatch('/educator/*')
  
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar/>}


      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/course-list' element={<CoursesList/>} />
        <Route  path='/course-list/:input' element={<CoursesList/>} />
        <Route  path='/course/:id' element={<CourseDetails/>} />
        <Route  path='/my-enrollments' element={<MyEnrollments/>} />
        <Route  path='/player/:courseId' element={<Player/>} />
        <Route  path='/loading/:path' element={<Loading/>} />
        <Route  path='educator' element={<Educator/>}>
          <Route path='/educator' element={<Dashboard/>} />
          <Route path='add-course' element={<AddCourse/>} />
          <Route path='my-courses' element={<MyCourses/>} />
          <Route path='student-enrolled' element={<StudentEnrolled/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App



































// import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'

// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <nav className="bg-blue-600 text-white p-4 flex space-x-4">
//         <Link to="/" className="hover:underline">Home</Link>
//         <Link to="/about" className="hover:underline">About</Link>
//       </nav>
//       <main className="flex-grow p-6">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </main>
//       <footer className="bg-gray-200 text-center p-4 text-gray-700">
//         &copy; 2025 Your Company
//       </footer>
//     </div>
//   )
// }
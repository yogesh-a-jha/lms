import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{


    const currency = import.meta.env.VITE_CURRENCY

    const navigate = useNavigate()

    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)
    const [enrolledCourses, setEnrolledCourses] = useState([])

    //fetch  courses detail

    const fetchAllCourse = async () => {
        setAllCourses(dummyCourses)
    }

    //fetch user enrolled courses
    const fectUserEnrolledCourses = async () =>{
        setEnrolledCourses(dummyCourses)
    }

    useEffect(() => {
      fetchAllCourse()
      fectUserEnrolledCourses()
    }, [])

    //function to calculate the average rating of course
    const calculateRating = (course)=>{
        if(course.courseRatings.length === 0){
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach((rating)=>{
            totalRating += rating.rating
        })

        return totalRating / course.courseRatings.length
    }

    //function to calculate course chapter time
    const calculateChapterTime =(chapter) =>{
        let time = 0
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000 , {units:["h","m"]})

    }

    //function to calculate course duration
    const calculateCourseTime = (course) => {
        let time = 0
        course.courseContent.map((chapter)=> (chapter.chapterContent.map(
            (lecture)=> time += lecture.lectureDuration 
        )))

        return humanizeDuration(time * 60 * 1000 , {units:["h","m"]})
    }

    //function to calculate No. of lectures in the course
    const calculateNoOfLectures = (course) => {
        let totalNoOfLectures = 0
        course.courseContent.forEach((chapter)=>{
            if(Array.isArray(chapter.chapterContent)){
                totalNoOfLectures += chapter.chapterContent.length;
            }
        })
        return totalNoOfLectures;
    }


    

    const value={
        currency,
        allCourses,
        enrolledCourses,
        fectUserEnrolledCourses,
        navigate,
        calculateRating,
        isEducator , setIsEducator,
        calculateChapterTime, calculateCourseTime, calculateNoOfLectures
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
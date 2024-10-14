import { Box, Button, Card, CardActions, CardContent, CardMedia,  Grid2, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
  
const Home = () => {
  const [showFullDescription, setShowFullDescription] = useState({});

  const handleReadMore = (courseId) => {
    setShowFullDescription((prevExpanded) => ({ ...prevExpanded, [courseId]: !prevExpanded[courseId] }));
  };
   
const [row,setRows]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/course/').then((res)=>{
    setRows(res.data);
    })
  },[])
  let deleteCourse=(p)=>{
    axios.delete('http://localhost:5000/course//delete/'+p).then((res)=>{
      alert('deleted');
      window.location.reload();
    })
  }
  const navigate=useNavigate()
  function updatecourse(course){
    navigate('/course',{state:{course}})
  }
  const user=localStorage.getItem("username")
// const row=[{
  
// "courseId":"MC1",
// "courseImage":"https://img.freepik.com/premium-vector/data-science-logo-template_567288-95.jpg?w=2000",
// "courseName":"DATA SCIENCE",
// "courseCategory":"Data Administration",
// "courseDescription":"Data science is an in-demand career path for people with an aptitude for research, programming, math, and computers. Discover real-world applications and job opportunities in data science and what it takes to work in this exciting field.",
// "courseFee":25000,
// },
// {
//  "courseId":"MC2",
//  "courseImage":"https://www.startlazaa.com/wp-content/uploads/hospital-management-software-hospital-management-information-software-startlazaa.png",
// "courseName":"HOSPITAL ADMINISTRATION",
// "courseCategory":"Administration",
// "courseDescription":"Hospital administration refers to the management and oversight of hospital operations, ensuring the delivery of high-quality patient care, efficient services, and effective resource allocationt",
// "courseFee":25000
// }, 
// {
//   "courseId":"MC3",
//   "courseImage":"https://i.pinimg.com/originals/64/79/b9/6479b9448caa384c54cdeceb1578b5ae.jpg",
// "courseName":"PYTHON",
// "courseCategory":"Software Development",
// "courseDescription":"versatile programming languages used in various industries, including web development, data science, artificial intelligence,and more",
// "courseFee":25000,

// },
// {
//   "courseId":"MC4",
//   "courseImage":"https://i.pinimg.com/originals/2e/cf/73/2ecf7364cd78b7222311518159a72179.jpg",
//   "courseName":"TOURISM",
//   "courseCategory":"Travel Operations ",
//   "courseDescription":"Tourism studies is an interdisciplinary field that examines the social, cultural, economic, and environmental aspects of tourism. It explores the planning, management, and impact of tourism on destinations and communities",
//   "courseFee":25000,
  
// }
// ]


  return (
    <div>
      <h1>welcome {user}</h1>
      <Grid2 container spacing={4} justifyContent="center">
      {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, padding: 2 }}> */}

      {row.map((course) => (

<Grid2 item key={course.courseId} xs={8} sm={4} md={4} lg={3} sx={{marginTop:'6%'}} >
    <Card>
      <CardMedia
        sx={{ height: 100,objectFit: 'cover', width:250,  borderRadius: '10px 10px 0 0'}} 
        image={course.courseImage}
        title={course.courseName}
      />
      <CardContent sx={{padding:3}}>
        <Typography gutterBottom variant="h5" component="div">
          {course.courseId}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {course.courseName}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary',marginBottom: 1 }}>
        {course.courseCategory}
        </Typography>
    
        <Typography variant="body2" sx={{ color: 'text.secondary',marginBottom: 1 }}>
        {showFullDescription[course.courseId]
                    ? course.courseDescription
                    : course.courseDescription.substring(0, 40) + '...'}
                  <span onClick={() => handleReadMore(course.courseId)} style={{ cursor: 'pointer', color: 'red' }}>
                    {showFullDescription[course.courseId] ? 'Read Less' : 'Read More'}
                  </span>

    </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary',marginBottom: 1 }}>
            {course.courseFee}
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {course.courseImage}
        </Typography> */}
      </CardContent>
      <CardActions>
      {/* <Button color="secondary">Secondary</Button> */}
<Button variant="contained" color="success" onClick={()=>{updatecourse(course)}}> update
</Button>
<Button variant="contained" color="error" onClick={()=>{deleteCourse(course._id)}}>
  delete
</Button>
      </CardActions>
    </Card>
    </Grid2>
     ))}
    
     
     </Grid2>

     </div>
 
  )
}

export default Home
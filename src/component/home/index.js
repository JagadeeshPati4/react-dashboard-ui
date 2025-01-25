import React,{useState,useEffect} from 'react'
import Sidebar from '../sidebar'
import './index.css'
import { FaRegCalendar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import Libary from './libary';
import ResultData from './data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [resultData ,setData]=useState([])
  const [isData, setIsData]=useState(false)
  const [showMore ,setShow]=useState(true)
  const [sidebar ,setSidebar]=useState(false);

  useEffect(()=>{
    const dateInterval =setInterval(()=>{
      setDate(new Date())
    },10000);
    return ()=> clearInterval(dateInterval)

  },[date]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      if (error instanceof TypeError) {
        console.error('Network error:', error.message);
        throw new Error('Network error occurred');
      } else {
        console.error('Error fetching data:', error.message);
        throw new Error('Error fetching data');
      }
    }
  };
  useEffect(()=>{
    fetchData()
    .then(data => {
      setData(data.products) 
      setIsData(true); 
  })
    .catch(error => {
      console.error('Error in fetchData:', error);
  });

  },[])
   
  const today = date.getDate()
  const dayName = date.toLocaleString('en-US', { weekday: 'long' });
  const time =date.getHours() +':'+date.getMinutes() +':'+date.getSeconds()
  
  return (
    <div className='home-main-container'>
      <div className='side-container'>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
      </div>
      
      <div className={`home-container ${sidebar?'sidebar-margin':''} ${showMore?'':'show-more-bg'}`}>
        <div className='info-main-container'>
          <div className='info-container'>
            <h1>Good Afternoon,Akshay</h1>
            <p>You are subscribded to Retail plan</p>
          </div>
          <div className='date-main-container'>
            <div className='date-container'>
              <FaRegCalendar size={30}/>
              <label className='label-time'>Today,</label>
              <label className='label-time'>{today}</label>
              <label className='label-time'>{dayName}</label>
              <IoMdTime size={30}/>
              <label className='label-time'>{time}</label>
            </div>
            <FaRegBell size={30}/>
          </div>
        </div>
        <div className='libary-main-container'>
        <Libary color={'#5AC1F4'} id={1}/>
        <Libary color={'#7171F4'} id={2}/>
        <Libary color={'#E28690'} id={3}/>
        <Libary color={'#F87F55'} id={4}/>
        <Libary color={'#19C98E'} id={5}/>
        </div>
      
        <div className='bottom-container'>
        <div className='botton-first-container'>
          {showMore ?
          <div className='splide-main-container'>
          <div className='splide-container'>{isData ?
          <Splide className='splide-main'
      options={{
        type: 'loop',
        height: '30rem',
        perPage: 4,
        padding:"15px",
        gap:"15px",
        breakpoints: {
          640: {
            height: '10rem',
            perPage:1,
          },
          765: {
            height: '10rem',
            perPage:2,
          },
          865: {
            height: '10rem',
            perPage:3,
          },
        },
      }}
    >
        {resultData.map((item, index) => (
    <SplideSlide className='result-data-container spider-height' key={index}>
      <img src={item.images[0]} alt={item.title} />
      <h6>{item.title}</h6>
      <p>{item.description}</p>
    </SplideSlide>
  ))}
      
      
    </Splide>:""}

          </div>
          </div> :
          <div className='more-items-container'>
            { showMore === false ? 
              resultData.map((each)=>(
                <ResultData data={each}/>
              )):''
            }
               
            </div>}
            <div className='d-flex justify-content-center'>
            <div onClick={()=>setShow(!showMore)} className='about-button'>
        <button >{showMore?'VIEW MORE':'VIEW LESS' }</button><spam className='plus-spam'><FaPlus  size={20} /></spam>
        </div>
        </div>
            </div>
          <div className='bottom-second-container'>
            <div className='recent-container'>
            <p>Recent Release</p>
            <select>
              <option value='India'>India</option>
              <option value='America'>America</option>
              <option value='Iran'>Iran</option>
              <option value='Isarel'>Isarel</option>
            </select>
            </div>
            <hr/>
            <div className='d-flex justify-content-center '>
              <div className='line-container'><p className='none'></p>
              <hr className='line'/>
              </div>
              <div className='recent-info'>
                <h6 className='date-info'>February 12, 2024</h6>
                <h5>Industrical Production</h5>
                <p>Industrial Production

                Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth 
                in the same month last year. Electricity has seen the slowest growth of 1.2% YoY in Decembly as compared
                to 10.4% YoY growth in the same month last year.</p>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <div className='line-container'><p className='none'></p>
              <hr className='line'/>
              </div>
              <div className='recent-info'>
                <h6 className='date-info'>February 12, 2024</h6>
                <h5>CPI Inflation</h5>
                <p>India's Inflation eased to 5.1% in Jan, 
                  a 60 basis points decrese from the previous month. Consumer Food Price
                   Index (CFPI) declined from 9.68% in Dec 23 to 8.3%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

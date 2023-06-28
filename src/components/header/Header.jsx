import {
  faBed,
  faBookOpen,
  faCalendarDays,
  faCarSide,
  faHotel,
  faPerson,
  faPlaneArrival,
  faTaxi,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
const Header = ({type}) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  
  const handleOption=(name,operation)=>
  {
           setOptions((prev)=>{
              return{
                ...prev,[name]:operation==='i' ? options[name]+1 : options[name]-1
              }
           })
  }

  const handleSearch=()=>
  {
    navigate("/hotels" ,{state:{destination,date,options}})
  }

  const dateRef = useRef(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dateRef.current &&
        !dateRef.current.contains(event.target) &&
        !event.target.classList.contains("date") &&
        optionsRef.current &&
        !optionsRef.current.contains(event.target) &&
        !event.target.classList.contains("options")
      ) {
        setOpenDate(false);
        setOpenOptions(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="header" >
      <div className={type==='list' ? 'headerContainer listMode':'headerContainer'}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlaneArrival} />
            <span>Flights</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faCarSide} />
            <span>car rentals</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faTree} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Cabs</span>
          </div>
        </div>
      {
       type !== "list"  && <> <h2 className="headerTitle">
          Book your stay with us and experience the best of luxury and comfort!
        </h2>
        <div className="headerbtnDiv">
        <button className="headerbtn">Sign in/Log in</button>
        </div>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where do you want to go "
              className="headerSearchInput"
              onChange={(e)=>setDestination(e.target.value)}
            />
          </div>
       
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span 
            ref={dateRef}
            onClick={() => setOpenDate(!openDate)} className="headerSearchText">
              {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>
            { openDate && (
               <div className="date">
              <DateRange
                className="date"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                minDate={new Date()}
                ranges={date}
              />
              </div>
            ) }
          </div>

          <div className="headerSearchItem" >
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span 
            ref={optionsRef}
            className="headerSearchText" onClick={()=>{setOpenOptions(!openOptions)}}>{`${options.adult} adult .  ${options.children} children .  ${options.room} room`}</span>
           { openOptions && 
        
           <div className="options">
              <div className="optionItem">
                <span className="optionItemText">Adult</span>
                <div className="optionCounter">
                  <button disabled={options.adult <=1} className="optionCounterButton" onClick={()=>{handleOption('adult','d')}}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton" onClick={()=>{handleOption('adult','i')}}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionItemText">Children</span>
                <div className="optionCounter">
                  <button disabled={options.children <=0} className="optionCounterButton" onClick={()=>{handleOption('children','d')}}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button className="optionCounterButton" onClick={()=>{handleOption('children','i')}}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionItemText">Room</span>
                <div className="optionCounter">
                  <button disabled={options.room <=1}className="optionCounterButton" onClick={()=>{handleOption('room','d')}}>-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button className="optionCounterButton" onClick={()=>{handleOption('room','i')}}>+</button>
                </div>
              </div>
            </div>
        
          }
          </div>

          <div className="headerSearchItem">
            <button className="headerbtn" onClick={handleSearch}>search</button>
          </div>
        </div> </>
      }
      </div>
    </div>
  );
};

export default Header;

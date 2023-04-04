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

const Header = ({type}) => {
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
  return (
    <div className="header">
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
      { type !== "list"  && <> <h2 className="headerTitle">
          Book your stay with us and experience the best of luxury and comfort!
        </h2>
        <button className="headerbtn">Sign in/Log in</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where do you want to go "
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                className="date"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            ) }
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText" onClick={()=>{setOpenOptions(!openOptions)}}>{`${options.adult} adult .  ${options.children} children .  ${options.room} room`}</span>
           { openOptions && <div className="options">
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
            <button className="headerbtn">search</button>
          </div>
        </div> </>}
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from 'react'
import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import SearchItem from '../../components/searchItem/SearchItem'

const List = () => {
    const location = useLocation();
    const [destination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options] = useState(location.state.options)

  return (
    <>
        <Navbar/>
        <Header type="list" />
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                        <label>Description</label>
                        <input type="text" placeholder={destination} />
                    </div>
                    <div className="lsItem">
                        <label>Check-in Date</label>
                        <span onClick={() => setOpenDate(!openDate)}>
                            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        { openDate && (
                            <DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />
                        )}
                    </div>
                    <div className="lsItem">
                        <label>Options</label>
                        <div className="lsOptions">
                            <div className="lsOptionsItem">
                                <span className="lsOptionsText">
                                    Min price <small>per night</small>
                                </span>
                                <input type="number" className="lsOptionsInput" />
                            </div>
                            <div className="lsOptionsItem">
                                <span className="lsOptionsText">
                                    Max price <small>per night</small>
                                </span>
                                <input type="number" className="lsOptionsInput" />
                            </div>
                            <div className="lsOptionsItem">
                                <span className="lsOptionsText">Adult</span>
                                <input 
                                    type="text" 
                                    className="lsOptionsInput" 
                                    min={1}
                                    placeholder={options.adult}
                                />
                            </div>
                            <div className="lsOptionsItem">
                                <span className="lsOptionsText">Children</span>
                                <input 
                                    type="text" 
                                    className="lsOptionsInput" 
                                    min={0}
                                    placeholder={options.children}
                                />
                            </div>
                            <div className="lsOptionsItem">
                                <span className="lsOptionsText">Roomt</span>
                                <input 
                                    type="text" 
                                    className="lsOptionsInput" 
                                    min={1}
                                    placeholder={options.room}
                                />
                            </div>
                        </div>
                    </div>
                    <button>Search</button>
                </div>
                <div className="listResult">
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                </div>
            </div>
        </div>
    </>
  )
}

export default List
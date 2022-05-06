import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi
 } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
      <div className="header">
          <div className="headerContainer">
              <div className="headerList">
                  <div className="headerListItem active">
                      <FontAwesomeIcon icon={faBed} />
                      <span>Stays</span>
                  </div>
                  <div className="headerListItem">
                      <FontAwesomeIcon icon={faPlane} />
                      <span>Flights</span>
                  </div>
                  <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                      <span>Car Rentals</span>
                  </div>
                  <div className="headerListItem">
                    <FontAwesomeIcon icon={faPerson} />
                      <span>Attractions</span>
                  </div>
                  <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                      <span>Airport taxis</span>
                  </div>
              </div>
              <>
                <h1 className="headerTitle">
                    A lifetime of discounts? It is Genius
                </h1>
                <p className="headerDesc">
                    Get rewarded for your travels - unlock instant saving of 10% or
                    more with a free AndyBooking account.
                </p>
                <button className="headerBtn">Sign in / Register </button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon"/>

                    </div>
                </div>
              </>
          </div>
      </div>
  )
}

export default Header
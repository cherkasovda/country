import React from 'react';
import SearchPanel from "../search-panel/search-panel"
import Popup from '../popup/popup';
import {NavLink} from "react-router-dom"


const Header = ({ onItemAdded, onSearchChange, onFilterChange, onSortPopulation, onSortName, onSortRegion, onSortChange }) => {
return (

<React.Fragment>
        < header className="header" > Countries of Europe</header>
        <nav className="navbar">
            <NavLink type='button ' to="/listcountry">List of Countries</NavLink>
            <NavLink type='button ' to="/favcountry">Favorite Countries</NavLink>
            <Popup onItemAdded={onItemAdded} />
            <SearchPanel onSearchChange={onSearchChange}
                onFilterChange={onFilterChange}
                onSortPopulation={onSortPopulation}
                onSortName={onSortName}
                onSortRegion={onSortRegion}
                onSortChange={onSortChange}
                
            />

        </nav>
        {/* <div className="service container d-flex">
            

        </div> */}
    </React.Fragment>

    )
}
export default Header;
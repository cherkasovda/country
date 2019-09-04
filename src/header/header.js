import React from 'react';
import SearchPanel from "../search-panel/search-panel"
import Popup from '../popup/popup';
import {NavLink} from "react-router-dom"


const Header = ({ onItemAdded, onSearchChange, onFilterChange, onSortByField, clickSortName }) => {
return (

<React.Fragment>
        < header className="header" > Countries of Europe</header>
        <nav className="navbar">
            <NavLink type='button ' to="/listcountry">List of Countries</NavLink>
            <NavLink type='button ' to="/favcountry">Favorite Countries</NavLink>
            <Popup onItemAdded={onItemAdded} />
            <SearchPanel onSearchChange={onSearchChange}
                onFilterChange={onFilterChange}
                onSortByField={onSortByField}
                onClickSortName={clickSortName}
            />

        </nav>
        {/* <div className="service container d-flex">
            

        </div> */}
    </React.Fragment>

    )
}
export default Header;
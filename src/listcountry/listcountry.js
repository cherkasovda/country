import React from "react";
import './listcountry.css'


class ItemCountry extends React.Component {

    render() {
        const { country } = this.props;
        return (
         
            <div className="card">
                <div>
                    <p key={country.numericCode} className="card-title mr-5 float-left ">{country.name}</p>
                <img className="float-right"
                    src={country.flag}
                    alt=""
                    />
                </div>
            </div>
        );

    }
}

export default ItemCountry;
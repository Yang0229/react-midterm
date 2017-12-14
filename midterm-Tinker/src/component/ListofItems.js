
import React, {Component} from "react";
import PropTypes from "prop-types";
import ItemModel from "./ItemModel"

export default class ListofItems extends Component{

    render(){
		let basicinfo = this.props.contacts.map((item) => (
		< ItemModel
					key = {item.key}
                    id = {item.id}
                    picture = {item.picture}
                    name = {item.name}
                    dob = {item.dob}
                    onClick = {this.props.selectContact}/>
		));
        return(
            <div className="column list">
                <ul> {basicinfo}</ul>
            </div>
        );

    }
}
ListofItems.propTypes = {
    contacts: PropTypes.array,
    selectContact: PropTypes.func
};

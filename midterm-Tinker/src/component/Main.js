
import React, {Component} from "react";
import PropTypes from "prop-types";
import ListofItems from "./ListofItems"
import ItemDetail from "./ItemDetail"
import Heading from "./Heading"


export default class Main extends Component{
    render(){
        return (
            <div className="row">
                <Heading/>
                <div>
                    <ListofItems contacts={this.props.contactList} selectContact={this.props.selectContact}></ListofItems>
                    <ItemDetail contact={this.props.contact}></ItemDetail>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    contactList: PropTypes.array.isRequired,
    selectContact:PropTypes.func.isRequired,
    contact: PropTypes.object
}

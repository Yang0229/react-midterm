
import React, {Component} from "react";
import PropTypes from "prop-types";
import {calculateAge} from "../calculateAge";

export default class ItemDetail extends Component{

    render(){

        if(!this.props.contact){
            return(
            <div className="detail-profile"> Please select one contact</div>
            )
        } else {
            return (
            <div className = 'details'>
                <h1> {this.props.contact.name.first+ " " + this.props.contact.name.last}</h1>
                <div>
                    <div>Gender: {this.props.contact.gender}</div>
                    <div className="age">DOB: {this.props.contact.dob}  ( {calculateAge(this.props.contact.dob )} yeas old!)</div>
                </div>
                 <hr/>
                 <div> {this.props.contact.location.street} <br/> {this.props.contact.location.city}, {this.props.contact.location.state}<br/>{this.props.contact.location.postcode}</div>
                 <hr/>
                 <div>
                      <div>Email:<a href= {"mailto:" + this.props.contact.email}> {this.props.contact.email} </a></div>
                      <div>Phone: {this.props.contact.cell}</div>
                </div>
                <img src = {this.props.contact.picture.large}/>
            </div>
            )
            }
        }
    }

    ItemDetail.propTypes = {
        contact: PropTypes.object
    }

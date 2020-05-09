import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import "../root/App.css"

class Contact extends Component {
    constructor() {
        super();
    
        this.onSuccess = this.onSuccess.bind(this);
        this.getText = this.getText.bind(this);
      }

      onSuccess() {
        console.info('successfully copied');
      }
    
      getText() {
        return 'I\'ll be copied';
      }

    handleClick = () => {
        var copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
    }

    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Onur Altuntas</h2>
                        <img src="https://avatars0.githubusercontent.com/u/53194850?s=460&u=88ff0b9c8fe41c908d3c9b7ff43eb00dba669e66&v=4"
                            alt="avatar"
                            style={{ height: '250px' }} />

                        <p style={{ width: "75%", margin: 'auto', paddingTop: "1em" }}>Voluptate reprehenderit voluptate magna est in. Excepteur irure elit pariatur minim et consequat quis est ipsum aliqua. Labore consectetur eu veniam magna ad irure nisi tempor laborum voluptate. Qui aliquip mollit veniam culpa occaecat duis tempor ullamco magna reprehenderit exercitation laboris. Mollit do exercitation sit officia duis fugiat aute anim.</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr></hr>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent className="list-itemcontent" >
                                        <i style={{ fontSize: "50px", paddingRight: "5rem" }} className="fa fa-phone-square" aria-hidden="true" />
                                        (507)505 56 36
                                </ListItemContent>

                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-itemcontent" >
                                        <i style={{ fontSize: "50px", paddingRight: "5rem" }} className="fa fa-fax" aria-hidden="true" />
                        (507)505 56 36
                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-itemcontent" >
                                        <i onClick={this.handleClick} style={{ fontSize: "50px", paddingRight: "5rem" }} className="fa fa-envelope" aria-hidden="true" />
                                        <input type="text" value="onuraltuntas50@gmail.com" id="myInput"></input>
                                      
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;
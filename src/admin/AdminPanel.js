import React from 'react'
import { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { useHistory } from 'react-router-dom';
import alertify from "alertifyjs"
const AdminPanel = (props) => {

    const { user } = props;
    const [input, setInput] = useState({})
    const history = useHistory()

    const handleInputChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    })

    const handleOnclik = () => {
        if (input.name === user.name && input.password === user.password) {
            console.log("success")
            let path = `/saveproduct`;
            history.push(path)
        }
        else {
            console.log("fail")
            alertify.dialog('alert').set({transition:'zoom',message: 'Name or password is incorrect!'}).show(); 
        }
    }

    if (user) {
        return (
            <div className="container-sm">
            <h1 style={{textAlign:'center'}}>Admin Panel</h1>
               
                    <Form className="form">
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="name" name="name" id="userName" placeholder="name" onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="userPassword" placeholder="password" onChange={handleInputChange} />
                        </FormGroup>
                        <Button onClick={handleOnclik}>Submit</Button>
                    </Form>
             
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading users...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const id = "admin";
    const users = state.firestore.data.users;
    const user = users ? users[id] : null
    return {
        user: user
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'users' }])
)(AdminPanel)
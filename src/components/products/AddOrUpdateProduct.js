import React, { Component} from "react"
import { connect } from "react-redux"
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import {createProject} from '../../redux/actions/projectActions'

class AddOrUpdateProduct extends Component {
    state={
        categoryId:'',
        projectName:'',
        image:'',
        detail:'',
        showLink:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
    }


    render(){
        return(
            <div>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label for="categoryId">categoryId</Label>
                            <Input type="categoryId" name="categoryId" id="categoryId" placeholder="categoryId" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="projectName">projectName</Label>
                            <Input type="projectName" name="projectName" id="projectName" placeholder="projectName" onChange={this.handleChange} />
                        </FormGroup>
                       
                        <FormGroup>
                            <Label for="detail">detail</Label>
                            <Input type="detail" name="detail" id="detail" placeholder="detail" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="image">imageUrl</Label>
                            <Input type="detail" name="image" id="image" placeholder="imageUrl" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="showLink">showLink</Label>
                            <Input type="showLink" name="showLink" id="showLink" placeholder="showLink" onChange={this.handleChange} />
                        </FormGroup>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </Container>
            </div> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject : (project) => dispatch(createProject(project))
    }
}

export default connect(null,mapDispatchToProps)(AddOrUpdateProduct)


import React, { useState } from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import {
    Card, CardImg, CardText, CardBody, CardTitle,
    CardSubtitle, Button, Row, Container, Col,
} from 'reactstrap';
import { Tabs, Tab } from "react-mdl"

const Projects = (props) => {
    
    const { project } = props;
    const [activeTab, setActiveTab] = useState(0);

    if (project) {
       
        return (
            <div>
            <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
                    <Tab>React</Tab>
                    <Tab>Vue</Tab>
                    <Tab>Android</Tab>
                </Tabs>

            <Container>
                <Row xs="3">
                {project.filter( item => item.categoryId===String(activeTab)).map(project=>(
                    <Col>
                            <Card>
                                <CardImg top width="100%" src={project.image} id="UncontrolledTooltipExample" alt="Card image cap" />
                                <CardBody>
                                    <CardText >
                                    </CardText>
                                    <CardTitle>{project.projectName}</CardTitle>
                                    <CardSubtitle>  {project.detail}</CardSubtitle><br></br>
                                    <Button  href={project.showLink}>
                                    Show</Button>
                                </CardBody>
                            </Card>
                        </Col> 
                ))}
                    
                </Row>
            </Container>
        </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading projects...</p>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const projects = state.firestore.ordered.projects;
    return {
        project: projects
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects'}])
)(Projects)
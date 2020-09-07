import React, { useState } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {
    Card, CardImg, CardText, 
    Button, Row, Container, Col, CardImgOverlay,
} from 'reactstrap';
import { Tabs, Tab } from "react-mdl"
import { useSpring, animated } from 'react-spring'
import BottomFooter from '../common/BottomFooter';



const Projects = (props) => {

    const { project } = props;
    const [activeTab, setActiveTab] = useState(0);

    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    });

    if (project) {

        return (
            <animated.div  style={fade}>
                <Tabs className="project-tabs"  activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
                    <Tab className="project-tabs" style={{ textAlign: 'center', fontSize: '20px' }}>React</Tab>
                    <Tab className="project-tabs" style={{ textAlign: 'center', fontSize: '20px' }}>Asp</Tab>
                    <Tab className="project-tabs" style={{ textAlign: 'center', fontSize: '20px' }}>Android</Tab>
                    <Tab className="project-tabs" style={{ textAlign: 'center', fontSize: '20px' }}>WordPress</Tab>
                </Tabs>

                <Container>
                    <Row>
                        {project.filter(item => item.categoryId === String(activeTab)).map(project => (
                            <Col>
                                <Card inverse>
                                    <img src={project.image} alt="image" height="300" width="350"></img>
                                    <CardImgOverlay style={{ textAlign: 'center' }}>
                                        <CardText>

                                        </CardText>
                                    </CardImgOverlay>
                                    <Button style={{ fontSize: '20px',width:"350px" }} href={project.showLink}>
                                        {project.projectName}</Button>
                                </Card>




                            </Col>
                        ))}

                    </Row>
                </Container>
                <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


                <BottomFooter/>
            </animated.div>
        )
    } else {
        return (
            <animated.div style={{textAlign:"center"}} className="container center" style={fade} >
            <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="sr-only">Loading...</span>
          </div>
            </animated.div>
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
    firestoreConnect([{ collection: 'projects' }])
)(Projects)
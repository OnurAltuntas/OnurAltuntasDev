import React, { useState } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {
    Card, CardImg, CardText, CardBody, CardTitle,
    CardSubtitle, Button, Row, Container, Col, CardImgOverlay,
} from 'reactstrap';
import { Tabs, Tab } from "react-mdl"
import { useSpring, animated } from 'react-spring'


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
            <animated.div style={fade}>
                <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
                    <Tab className="project-tabs" style={{ textAlign: 'center', fontSize: '20px' }}>React</Tab>
                    <Tab className="project-tabs" style={{ textAlign: 'center', fontSize: '20px' }}>Vue</Tab>
                    <Tab className="project-tabs" style={{ textAlign: 'center', fontSize: '20px' }}>Android</Tab>
                </Tabs>

                <Container>
                    <Row>
                        {project.filter(item => item.categoryId === String(activeTab)).map(project => (
                            <Col>
                                <Card inverse>
                                    <CardImg top width="100%" src={project.image} id="UncontrolledTooltipExample" alt="Card image cap" />
                                    <CardImgOverlay style={{ textAlign: 'center' }}>
                                        <CardText>

                                        </CardText>
                                    </CardImgOverlay>
                                    <Button style={{ fontSize: '20px' }} href={project.showLink}>
                                        {project.projectName}</Button>
                                </Card>




                            </Col>
                        ))}

                    </Row>
                </Container>
            </animated.div>
        )
    } else {
        return (
            <animated.div className="container center" style={fade} >
                <p>Loading projects...</p>
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
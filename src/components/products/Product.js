import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import * as productActions from "../../redux/actions/productActions"
import {
    Card, CardImg, CardText, CardBody, CardTitle,
    CardSubtitle, Button, Row, Container, Col,
} from 'reactstrap';

class Product extends Component {
    componentDidMount() {
        this.props.actions.getProduct(1)
    }
    render() {
        return (
            <div>
                <Container>
                    <Row xs="3">
                        {this.props.products.map(product => (
                            <Col>
                                <Card>
                                    <CardImg top width="100%" src={product.image} id="UncontrolledTooltipExample" alt="Card image cap" />
                                    <CardBody>
                                        <CardText >
                                        </CardText>
                                        <CardTitle>dsafasf</CardTitle>
                                        <CardSubtitle>  {product.explanation}</CardSubtitle><br></br>
                                        <Button  href={product.showLink}>
                                        Show</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeProjectCategoryReducer,
        products: state.productReducer,
        categories: state.projectCategoryListReducer
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProduct: bindActionCreators(productActions.getProducts, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);

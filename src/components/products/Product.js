import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import * as productActions from "../../redux/actions/productActions"
import {
    Card, CardImg, CardText, CardBody, CardTitle,
    CardSubtitle, Button, Row, Container, Col,
} from 'reactstrap';
import "../root/App.css"
import BottomFooter from '../common/BottomFooter';


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
                            <Col >
                            <div class="cards-list">
  
                            <div class="card 1">
                              <div class="card_image"> <img src={product.img} /> </div>
                              <div class="card_title title-white">
                                <p>{product.title}</p>
                              </div>
                              <Button  href={product.showLink}>
                              Show</Button>
                            </div>
                            
                            </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
              
                <BottomFooter/>
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

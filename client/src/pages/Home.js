import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Jumbotron } from 'reactstrap';
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Home extends Component {
    state = {
        activeOrders: "",
        completedOrders: "",
        productAInv: "",
        productBInv: "",
        productCInv: "",
    };

    componentDidMount() {
        // this.loadBooks();
    }

    render() {
        return (
            <div className="container">
                <Container fluid>
                    <Row>
                        <Col size="md-8">
                            <Row>
                                <Col size="md-6">
                                    <Card>
                                        <CardImg top src="./images/products2.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h2>Products/Recipes</h2></CardTitle>
                                            <Button>Open</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col size="md-6">
                                    <Card>  
                                        <CardImg top src="./images/inventory.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h2>Monitor Inventory</h2></CardTitle>
                                            <Button>Open</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-6">
                                    <Card> 
                                        <CardImg top src="./images/order.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h2>Orders</h2></CardTitle>
                                            <Button>Open</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col size="md-6">
                                    <Card>
                                        <CardImg top src="./images/manufacturing.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h2>Manufacturing</h2></CardTitle>
                                            <Button>Open</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col size="md-4">
                            <Jumbotron>
                                <h2>Dashboard</h2>
                                <p>Product A Inventory</p>
                                <p>Product B Inventory</p>
                                <p>Product C Inventory</p>
                                <p>active activeOrders</p>
                                <p>completedOrders</p>
                                <p>any alerts</p>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Home;

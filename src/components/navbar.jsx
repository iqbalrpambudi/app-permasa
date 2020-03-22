import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Container, Image, Icon } from "semantic-ui-react";
import Ikon from "../assets/brand.png";

class Navbar extends Component {
  constructor() {
    super();
    this.state = { activeItem: "home" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment style={{marginBottom:0}}>
        <Container>
          <Menu secondary>
            <Menu.Item fitted>
              <Image src={Ikon}/>
            </Menu.Item>
            <Menu.Item
              name="home"
              as={Link}
              to="/"
              position="right"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Alumni"
              as={Link}
              to="/alumni"
              active={activeItem === "alumni"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Grafik"
              as={Link}
              to="/grafik"
              active={activeItem === "grafik"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Container>
      </Segment>
    );
  }
}

export default Navbar;

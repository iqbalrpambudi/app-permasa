import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Container } from "semantic-ui-react";
import Icon from "../assets/favicon.ico";

class Navbar extends Component {
  constructor(){
    super()
    this.state = { activeItem: "home" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment>
        <Menu secondary>
          <Container>
            <Menu.Item
              name="icon"
              icon={Icon}
              active={activeItem === "icon"}
              onClick={this.handleItemClick}
              position="left"
            />
            <Menu.Item
              name="home"
              as={Link}
              to="/"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
              position="right"
            />
            <Menu.Item
              name="alumni"
              as={Link}
              to="/alumni"
              active={activeItem === "alumni"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="grafik"
              as={Link}
              to="/grafik"
              active={activeItem === "grafik"}
              onClick={this.handleItemClick}
            />
          </Container>
        </Menu>
      </Segment>
    );
  }
}

export default Navbar;

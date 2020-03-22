import React from "react";
import { Link } from "react-router-dom";

import { Container, Grid, Image, Card } from "semantic-ui-react";
import Alumni from "../../assets/alumni.webp";
import Chart from "../../assets/pie-charts.svg";

function Item(props) {
  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Grid columns={4} centered>
        <Grid.Column>
          <Card>
            <Image src={Alumni} wrapped ui={false} as={Link} to="/alumni" />
            <Card.Content>
              <Card.Header>Alumni</Card.Header>
              <Card.Description>Data Alumni Skansa</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image
              src={Chart}
              padded
              wrapped
              ui={false}
              as={Link}
              to="/alumni"
            />
            <Card.Content>
              <Card.Header>Infografis</Card.Header>
              <Card.Description>Statistik persebaran alumni</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src={Alumni} wrapped ui={false} as={Link} to="/alumni" />
            <Card.Content>
              <Card.Header>Alumni</Card.Header>
              <Card.Description>Data Alumni Skansa</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Item;

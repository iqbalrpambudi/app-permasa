import React from 'react';
import { Container, Grid, Image, Header } from "semantic-ui-react";

import Images from '../../assets/hero.webp'

function Hero(props) {
  return (
    <Container
          fluid
          style={{
            backgroundColor: "skyblue",
            marginTop: 0,
            marginBottom: "2rem"
          }}
        >
          <Container>
            <Grid columns={2} padded>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <Header
                  inverted
                  content="WELCOME TO PERMASA WEB APPS"
                  as="h1"
                  style={{
                    fontSize: "3em",
                    fontWeight: "Bold",
                    marginBottom: 0,
                    marginTop: "1.5em"
                  }}
                />
              </Grid.Column>
              <Grid.Column
                mobile={16}
                tablet={8}
                computer={8}
                textAlign="center"
              >
                <Image src={Images} />
              </Grid.Column>
            </Grid>
          </Container>
        </Container>

  );
}

export default Hero;
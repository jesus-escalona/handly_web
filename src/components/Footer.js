import React, {Component} from 'react';
import {Container, Grid, Header, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Container className='footer' fluid>
                <Grid textAlign='center'>
                    <Grid.Row>
                        <Grid.Column width={1}>
                            <Icon bordered circular size='large' name='instagram'/>
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <Icon bordered circular size='large' name='facebook'/>
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <Icon bordered circular size='large' name='snapchat'/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <Header as='h3' content='Services'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Header as='h3' content='About'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Header as='h3' content='Terms'/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Header as='h3' content='Privacy'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                {/*<div className="footer-basic">
                    <footer>
                        <div className="social">
                            <i className="icon ion-social-instagram"/>
                            <i className="icon ion-social-snapchat"/>
                            <i className="icon ion-social-twitter"/>
                            <i className="icon ion-social-facebook"/>
                        </div>
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link to="/services">Services</Link></li>
                            <li className="list-inline-item"><Link to="/about">About</Link></li>
                            <li className="list-inline-item"><Link to="/terms">Terms</Link></li>
                            <li className="list-inline-item"><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                        <p className="copyright">Handly © 2019</p>
                    </footer>
                </div>*/}
            </Container>
        );
    }
}

export default Footer;
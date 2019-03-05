import React, {Component} from 'react';
import {Header, Grid, Image} from "semantic-ui-react";

class CompaniesContainer extends Component {
    render() {
        const {companies} = this.props;
        const companiesComp = companies.map((company,i) => (
            <Grid.Row key={i}>
                <Header as='h3' inverted>{company.attributes.company_name}</Header>
            </Grid.Row>)
        );
        return (
            <div>
                <Header as='h1' inverted>We work with all these great moving companies and more!</Header>
                {companiesComp.length &&
                <Grid stackable>
                        {companiesComp}
                </Grid>}
            </div>
        );
    }
}

export default CompaniesContainer;
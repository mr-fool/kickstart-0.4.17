import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';

class RequestIndex extends Component {

    static async getInitialProps(props){
        const {address} = props.query;
        const campaign = Campaign(address);
        return {address};
    }

    render() {
        return(
            <Layout>
                <h3>Requests</h3>
                { console.log(this.props.address) }
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary>Add Request</Button>
                    </a>
                </Link>
            </Layout>
        );
    }
}
export default RequestIndex;
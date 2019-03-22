import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    Json.parse(CampaignFactory.interface),
    '0x133092496ae191aDA0D68bf8ffa4f4FA55C053DB'

);
export default instance;
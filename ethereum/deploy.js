const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
require('dotenv').config() // Store environment-specific variable from '.env' to process.env

const provider = new HDWalletProvider(
    process.env.MNENOMIC,
    "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ gas: '7000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
//Contract deployed to 0x133092496ae191aDA0D68bf8ffa4f4FA55C053DB
//Contract deployed to ropsten 0x64F1Ab7ba5b5558CAca6eEBe29E79e92036e49Cc 
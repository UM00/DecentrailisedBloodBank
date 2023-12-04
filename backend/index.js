const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/users.routes');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRouter);

mongoose
  .connect('mongodb://localhost:27017/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.get('/', (req, res) => {
  res.send(`Server is running on NodeJS:${port}`);
});

const {Web3} = require('Web3');
const Contract = require('@truffle/contract');
const bloodBankJson = require('./build/contracts/BloodBank.json');

const mnemonic = 'lunch salon patch remain outer trim drive penalty hire earth borrow bike';
const provider = new HDWalletProvider(mnemonic, 'http://localhost:7545');

const web3 = new Web3(provider);

const bloodBank = Contract(bloodBankJson);
bloodBank.setProvider(web3.currentProvider);

app.post('/transferBlood', async (req, res) => {
  try {
    const { bloodType } = req.body;
    const bloodBankInstance = await bloodBank.at('0x5CA45211d54fA77900806a6a31930Cb084dA35a8');
    const fromAddress = '0x93B0d410402AcCF896018fdE809991532b5422Ef';
    await bloodBankInstance.transferBlood('0x5CA45211d54fA77900806a6a31930Cb084dA35a8', bloodType, { from: fromAddress });


    res.status(200).json({ message: 'Transfer successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/addBloodBank', async (req, res) => {
  try {
    const { bloodBankAddress } = req.body;
    const bloodBankInstance = await bloodBank.at('0x5CA45211d54fA77900806a6a31930Cb084dA35a8');
    const fromAddress = '0x93B0d410402AcCF896018fdE809991532b5422Ef';

    await bloodBankInstance.addBloodBank('0x71C7656EC7ab88b098defB751B7401B5f6d8976F', bloodBankAddress, { from: fromAddress });
    res.status(200).json({ message: 'Transfer successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

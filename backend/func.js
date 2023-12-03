// Access the deployed instance of the contract
const BloodBank = artifacts.require("BloodBank");

module.exports = async function (callback) {
  try {
    const bloodBankInstance = await BloodBank.deployed();

    // Add a blood bank
    await bloodBankInstance.addBloodBank('0x71C7656EC7ab88b098defB751B7401B5f6d8976F', 'NewBloodBank');

    // You can add more blood banks here using the same function
    await bloodBankInstance.transferBlood('0x71C7656EC7ab88b098defB751B7401B5f6d8976F', 1000);

    callback();
  } catch (error) {
    console.error(error);
    callback(error);
  }
};

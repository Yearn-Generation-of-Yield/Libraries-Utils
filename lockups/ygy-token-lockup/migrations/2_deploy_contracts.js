const YGYTokenLockup = artifacts.require("YGYTokenLockup");

module.exports = function (deployer) {
  deployer.deploy(YGYTokenLockup,"<<erc20 token address>>", "<<beneficiary address>>", "<<unlock epoch in seconds>>");
};

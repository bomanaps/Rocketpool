const hre = require("hardhat");

async function main() {
  const RETH = await hre.ethers.getContractFactory("contracts/Rocketpool/rETH.sol:rETH");
  const rETH = await RETH.deploy();

  await rETH.deployed();

  const Rocketpool = await hre.ethers.getContractFactory("Rocketpool");
  const rocketpool = await Rocketpool.deploy(rETH.address)

  console.log("rETH address: ",rETH.address);
  console.log("Rocketpool smart contract address: ",rocketpool.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
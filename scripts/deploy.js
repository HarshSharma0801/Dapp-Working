
const hre = require("hardhat");

async function main() {


  const milk = await hre.ethers.deployContract("Milk");

  await milk.waitForDeployment();

  console.log(
    `Deployed to address ${milk.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

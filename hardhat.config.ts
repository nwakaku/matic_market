import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";


const GOERLI_URL = process.env.GOERLI_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

console.log(GOERLI_URL, PRIVATE_KEY)

const config: HardhatUserConfig = {
  solidity: "0.8.11",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;

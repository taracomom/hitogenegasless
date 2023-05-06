import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ConnectWallet />
        <Web3Button
          contractAddress="0x2a0AE5423f580579e7aE1a973D506fC01dB54691"
          action={(contract) => contract.erc721.claim(1)} 
        >Claim</Web3Button>
      </main>
    </div>
  );
};

export default Home;

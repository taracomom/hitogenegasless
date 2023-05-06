import type { AppProps } from "next/app";
import { ThirdwebProvider, localWallet, metamaskWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet(),
        localWallet()
      ]}
      sdkOptions={{ 
        gasless: {
          openzeppelin: { 
            relayerUrl: "https://api.defender.openzeppelin.com/autotasks/20a34cbf-7484-4945-a8d1-947631cdb1de/runs/webhook/ee26014d-2b60-4b89-9e50-e9448cc13600/A8RXFUE3ctAgX2mYmL1qo8"
          }
        }
      }}
    >  
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

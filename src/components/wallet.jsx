import { useMemo } from "react"
import { clusterApiUrl } from "@solana/web3.js"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import {
   GlowWalletAdapter,
   LedgerWalletAdapter,
   PhantomWalletAdapter,
   SlopeWalletAdapter,
   SolflareWalletAdapter,
   SolletExtensionWalletAdapter,
   SolletWalletAdapter,
   TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets"
import {
   ConnectionProvider,
   WalletProvider,
} from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
//component imports here
import "@solana/wallet-adapter-react-ui/styles.css"

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"

const ConnectButton = () => {
   const { connection } = useConnection()
   const { publicKey, sendTransaction } = useWallet()
   console.log(connection, publicKey)

   return (
      <div>
         <WalletMultiButton />
      </div>
   )
}

export default function Wallet() {
   const solNetwork = WalletAdapterNetwork.Devnet
   const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork])
   // initialise all the wallets you want to use
   const wallets = useMemo(
      () => [
         new PhantomWalletAdapter(),
         new GlowWalletAdapter(),
         new SlopeWalletAdapter(),
         new SolflareWalletAdapter({ solNetwork }),
         new TorusWalletAdapter(),
         new LedgerWalletAdapter(),
         new SolletExtensionWalletAdapter(),
         new SolletWalletAdapter(),
      ],
      [solNetwork]
   )

   return (
      <ConnectionProvider endpoint={endpoint}>
         <WalletProvider wallets={wallets}>
            <WalletModalProvider>
               <ConnectButton />
            </WalletModalProvider>
         </WalletProvider>
      </ConnectionProvider>
   )
}
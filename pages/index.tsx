import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const Home: NextPage = () => {


    //Auth
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnectFromMetamask = useDisconnect();

  return (
    <div>
      <Head>
        <title>NFT DROP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header className="flex items-center justify-between bg-black text-white">
            <img src="../images/index.png" alt="" />
            <h1 className="w-52 cursor-pointer text-4xl font-bold sm:w-80 text-inlined">
            Welcome to the nft drop challenge</h1>
            <button onClick={()=> address ? disconnectFromMetamask():connectWithMetamask()} className="rounded-full bg-rose-400 px-4 py-4 text-xs font-bolt text-white lg:py-3 lg:text-base">
            {address ? "Sign Out" : "Sign In"}    
            </button>
        </header>
        <hr />
        <body className="bg-gradient-to-br from-yellow-500 to-red-800">

        <button>Apes NFT</button>
        </body>


      </div>


    </div>
  )
}

export default Home

import { ethers } from "ethers";
import { WebKwil, Utils } from "kwil";
import { WebBundlr } from "@bundlr-network/client";


// kwill databasee
const kwilInit = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const dbid = Utils.generateDBID(
      "0x7afe4313D301616526944F5C6A7764bF62FF5eBE",
      "Memoverse"
    );
    const kwil = new WebKwil({
      kwilProvider: "https://provider.kwil.com"
    });

    
    console.log(dbid);

    const funder = await kwil.getFunder(provider)

    let res = await funder.approve("1000000000000000000") 
    // wait a few seconds for the ERC20 approval to be mined

     res = await funder.deposit("1000000000000000000")
    // wait for 12 block confirmations

    const schema = await kwil.getSchema(dbid)
    for (const table of schema.data.tables) {
        console.log(table.name)
    }

    
    console.log(res)

    return {
      success: true,
    
    };
  } catch (error) {
    return { success: false, error };
  }
};



// bundlr setUp
const getBundlr = async () => {
    const provider = new  ethers.providers.Web3Provider(window.ethereum);
    const bundlr = new WebBundlr("https://devnet.bundlr.network/", "matic", provider, {
      providerUrl: "https://rpc-mumbai.maticvigil.com/",
    });
    await bundlr.ready();
    console.log("bundlr=", bundlr);
  
    return bundlr; // done
  };


export { getBundlr, kwilInit};
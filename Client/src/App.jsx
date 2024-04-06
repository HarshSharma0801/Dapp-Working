import { useEffect, useState } from "react";
import Web3, { Contract } from "web3";
import { ethers } from "ethers";
import Login from "./Components/Login";
import Connected from "./Components/Connected";
import contractAddress from "./Constants/constant";
import contractABI from "./Constants/contractABI";
import Buy from "./Components/buy";
import Memos from "./Components/get";

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const template=async()=>{
   
      const CAddres=contractAddress;
      const CABI=contractABI;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try{

        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
       console.log(account);
        window.ethereum.on("accountsChanged",()=>{
         window.location.reload()
        })
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer =  provider.getSigner(); //write the blockchain
        console.log(signer);
        
        const contract = new ethers.Contract(
          CAddres,
          CABI,
          signer
        )
        
        console.log(contract);
      setState({provider,signer,contract});
       
      }catch(error){
        console.log(error)
      }
    }
    template();
  },[])

  return (
    <>
        <div >
    <p style={{ marginTop: "10px", marginLeft: "5px" }}>
      <small>Connected Account - {account}</small>
    </p>
    <Buy state={state} />
      <Memos state={state} />
      
   
  </div>
     
    </>
  );
}

export default App;

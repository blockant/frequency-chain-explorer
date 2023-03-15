import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";

export default function Account() {
  const [accountData, setAccountData] = useState([]);
  const router = useRouter();
  const { query } = router;
  const acc = Object.keys(query)[0];
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  async function getAccountDetails() {
    try {
      const balance = await provider.getBalance(acc);
      console.log("balances of account", balance);
      const Data = await provider.getHistory(acc);
      console.log("Data from the Accounnt ", Data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAccountDetails();
  }, []);

  return <div>Hello from Accounts</div>;
}

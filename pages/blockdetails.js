import { useState, useEffect } from "react";
import StyleTransaction from "../styles/block.module.css";
import Link from "next/link";
import Style from "../styles/Table.module.css";
import { useRouter } from "next/router";
import { ethers } from "ethers";

export default function BlockDetails() {
  const [blockData, setblockData] = useState([]);
  const [gasLimit, setGasLimit] = useState("");
  const [ethGasUsed, setEthGasUsed] = useState("");

  const router = useRouter();
  const { query } = router;
  const blockNumber = Number(Object.keys(query)[0]);
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  console.log("BLockNumber", blockNumber);
  async function getBlockDetails() {
    try {
      const getBlock = await provider.getBlock(blockNumber);
      console.log("BlockObject", getBlock);
      setblockData(getBlock);
      const gasLimit = ethers.utils.formatEther(getBlock.gasLimit);
      setGasLimit(gasLimit);
      const gasUsed = ethers.utils.formatEther(getBlock.gasUsed);
      setEthGasUsed(gasUsed);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBlockDetails();
  }, []);

  return (
    <div className={StyleTransaction.block}>
      <div className={StyleTransaction.box}>
        <div className={StyleTransaction.box__header}>
          <h5>Block #1253667</h5>
        </div>
        <div className={StyleTransaction.blockTable}>
          <div className={StyleTransaction.blockBtn}>
            <button>Block Details</button>
          </div>

          {blockNumber && (
            <div>
              <div className={StyleTransaction.dataRow}>
                <p>Block Height</p>
                <p>{blockData.number}</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>TimeStamp</p>
                <p>{blockData.timestamp}</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Validated by:</p>

                <Link href={{ pathname: "/account/", query: 6 }}>
                  <p className={StyleTransaction.color}>{blockData.miner}</p>
                </Link>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Hash</p>
                {/* ///////////////////// */}
                <p>{blockData.hash}</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>parentHash</p>
                <p>
                  <p>
                    {blockData.parntHash
                      ? blockData.parntHash
                      : "No Data Avaliable"}
                  </p>
                </p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Nonce</p>
                <p>{blockData.nonce}</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Extra Data</p>
                <p>{blockData.extraData}</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Difficulty</p>
                <p>
                  {blockData.difficulty
                    ? blockData.difficulty
                    : "No Data Avaliable"}
                </p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Gas Limit</p>
                <p>{gasLimit}</p>
              </div>
              <div className={StyleTransaction.dataRow}>
                <p>Gas Used</p>
                <p>{ethGasUsed}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

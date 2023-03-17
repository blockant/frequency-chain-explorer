import { useState, useEffect } from "react";
import StyleTransaction from "../styles/block.module.css";
import Link from "next/link";
import Style from "../styles/Table.module.css";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import Gas from "@/components/Gas";

export default function BlockDetails() {
  const [blockData, setblockData] = useState([]);
  const [gasLimit, setGasLimit] = useState("");
  const [ethGasUsed, setEthGasUsed] = useState("");
  const [difficulty, setDfficulty] = useState("");
  const [showData, setShowData] = useState(false);
  const currentdate = new Date();

  const router = useRouter();
  const { query } = router;
  const blockNumber = Number(Object.keys(query)[0]);
  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/KFGiZ9X78dt4jBe16IjpjVXbhlPzuSx8"
  );

  console.log("BLockNumber", blockNumber);
  async function getBlockDetails() {
    setShowData(false);
    try {
      const getBlock = await provider.getBlock(blockNumber);

      console.log("BlockObject", getBlock);
      setblockData(getBlock);
      const gasLimit = ethers.utils.formatEther(getBlock.gasLimit);
      setGasLimit(gasLimit);
      const gasUsed = ethers.utils.formatEther(getBlock.gasUsed);
      setEthGasUsed(gasUsed);
      const diff = ethers.utils.formatEther(getBlock.difficulty);
      setDfficulty(parseInt(diff));
      setShowData(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBlockDetails();
  }, [blockNumber]);

  return (
    // <div className={StyleTransaction.block}>
    //   <div className={StyleTransaction.box}>
    //     <div className={StyleTransaction.box__header}>
    //       <h5>Block #1253667</h5>
    //     </div>
    //     <div className={StyleTransaction.blockTable}>
    //       <div className={StyleTransaction.blockBtn}>
    //         <button>Block Details</button>
    //       </div>

    //       {blockNumber && (
    //         <div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Block Height</p>
    //             <p>{blockData.number}</p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>TimeStamp</p>
    //             <p>{blockData.timestamp}</p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Validated by:</p>

    //             <Link href={{ pathname: "/account/", query: 6 }}>
    //               <p className={StyleTransaction.color}>{blockData.miner}</p>
    //             </Link>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Hash</p>
    //             {/* ///////////////////// */}
    //             <p>{blockData.hash}</p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>parentHash</p>
    //             <p>
    //               <p>
    //                 {blockData.parntHash
    //                   ? blockData.parntHash
    //                   : "No Data Avaliable"}
    //               </p>
    //             </p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Nonce</p>
    //             <p>{blockData.nonce}</p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Extra Data</p>
    //             <p>{blockData.extraData}</p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Difficulty</p>
    //             <p>
    //               {blockData.difficulty
    //                 ? blockData.difficulty
    //                 : "No Data Avaliable"}
    //             </p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Gas Limit</p>
    //             <p>{gasLimit}</p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Gas Used</p>
    //             <p>{ethGasUsed}</p>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <main id="content" role="main">
      <input
        type="hidden"
        name="hdnAgeText"
        id="hdnAgeText"
        defaultValue="Age"
      />
      <input
        type="hidden"
        name="hdnDateTimeText"
        id="hdnDateTimeText"
        defaultValue="Date Time (UTC)"
      />
      <input
        type="hidden"
        name="hdnAgeTitle"
        id="hdnAgeTitle"
        defaultValue="Click to show Age Format"
      />
      <input
        type="hidden"
        name="hdnDateTimeTitle"
        id="hdnDateTimeTitle"
        defaultValue="Click to show Datetime Format"
      />
      <input
        type="hidden"
        name="hdnGasPriceTitle"
        id="hdnGasPriceTitle"
        defaultValue="Gas Price in Gwei"
      />
      <input
        type="hidden"
        name="hdnTxnFeeTitle"
        id="hdnTxnFeeTitle"
        defaultValue="(Gas Price * Gas Used by Txns) in Matic"
      />
      <input
        type="hidden"
        name="hdnGasPriceText"
        id="hdnGasPriceText"
        defaultValue="Gas Price"
      />
      <input
        type="hidden"
        name="hdnTxnText"
        id="hdnTxnText"
        defaultValue="Txn Fee"
      />
      <div className="container py-3">
        <div className="d-sm-flex align-items-center">
          <div className="mb-2 mb-sm-0">
            <h1 className="h4 mb-0">
              Block{" "}
              <span className="small text-secondary">
                &nbsp;#{blockData.number}
              </span>
              <br />
            </h1>
          </div>
        </div>
      </div>
      <div className="container space-bottom-2">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center p-0">
            <ul
              className="nav nav-custom nav-borderless nav_tabs1"
              id="nav_tabs"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#overview"
                  data-toggle="tab"
                  onclick="javascript:updatehash('');"
                >
                  Overview
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="overview"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div id="ContentPlaceHolder1_maintable" className="card-body">
                <div className="ow align-items-center">
                  <div className="col-md-12 text-danger  font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                    [ This is a Frequency <strong>Testnet</strong> block only ]
                  </div>
                </div>{" "}
                <hr className="hr-space" />
                <div className="row align-items-center  mt-1">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block."
                    />
                    Block Height:
                  </div>
                  <div className="col-md-9">
                    <div className="d-flex">
                      <span className="font-weight-sm-bold mr-2">
                        {blockData.number}
                      </span>
                      <Link
                        className="btn btn-xs btn-icon btn-soft-info mr-1"
                        href={{
                          pathname: "/blockdetails",
                          query: blockData.number - 1,
                        }}
                        data-toggle="tooltip"
                        title=""
                        data-original-title="View previous block"
                      >
                        <i className="fa fa-chevron-left btn-icon__inner" />
                      </Link>
                      <Link
                        className="btn btn-xs btn-icon btn-soft-info mr-1"
                        href={{
                          pathname: "/blockdetails",
                          query: blockData.number + 1,
                        }}
                        data-toggle="tooltip"
                        title=""
                        data-original-title="View next block"
                      >
                        <i className="fa fa-chevron-right btn-icon__inner" />
                      </Link>
                    </div>
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row align-items-center">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="The date and time at which a block is validated."
                    />
                    Timestamp:
                  </div>
                  <div className="col-md-9">
                    <i className="far fa-clock small mr-1" />
                    {blockData.timestamp} ago{" "}
                  </div>
                </div>
                <div id="ContentPlaceHolder1_div_tx_fieldname">
                  <hr className="hr-space mb-2" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i
                        className="fal fa-question-circle text-secondary mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="The number of transactions in the block. Internal transaction is transactions as a result of contract execution that involves MATIC value."
                      />
                      Transactions:
                    </div>
                    <div
                      id="ContentPlaceHolder1_div_tx_fieldvalue"
                      className="col-md-9"
                    >
                      <a
                        className="u-label u-label--value u-label--primary rounded my-1"
                        href="/txs?block=33177011"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Click to view Transactions"
                      >
                        {showData
                          ? blockData.transactions.length
                          : "loading...."}{" "}
                        transactions
                      </a>{" "}
                      and{" "}
                      <a
                        className="u-label u-label--value u-label--primary rounded my-1"
                        href="/txsInternal?block=33177011"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Click to view Internal Transactions"
                      >
                        2 contract internal transactions
                      </a>{" "}
                      in this block
                    </div>
                  </div>
                </div>
                <hr className="hr-space mt-2" />
                <div className="row align-items-center">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="Validator who successfully include the block onto the blockchain."
                    />
                    Validated by:
                  </div>
                  <div className="col-md-9">
                    <a href="/address/0xc275dc8be39f50d12f66b6a63629c39da5bae5bd">
                      {blockData.miner}
                    </a>{" "}
                    in 2 secs
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row align-items-center">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="For each block, the miner is rewarded with a finite amount of MATIC on top of the fees paid for all transactions in the block."
                    />
                    Block Reward:
                  </div>
                  <div className="col-md-9">
                    0<b>.</b>185425738175987472 MATIC
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row align-items-center  d-none">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="An uncle block has a significantly lower reward than a normal block. Uncles reward is valid but rejected as it is not on the longest chain which is the working mechanism of the blockchain. Uncle block is important in Polygon as it secures the blockchain."
                    />
                    Uncles Reward:
                  </div>
                  <div className="col-md-9">0</div>
                </div>
                <hr className="hr-space d-none" />
                <div className="row align-items-center">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="The amount of effort required to mine a new block. The difficulty algorithm may adjust according to time."
                    />
                    Difficulty:
                  </div>
                  <div className="col-md-9">{difficulty}</div>
                </div>
                <hr className="hr-space" />
                <div className="row align-items-center">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="Total difficulty of the chain until this block."
                    />
                    Total Difficulty:
                  </div>
                  <div className="col-md-9">212,522,388</div>
                </div>
                <hr className="hr-space" />
                <div className="row align-items-center">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="The block size is actually determined by the block's gas limit."
                    />
                    Size:
                  </div>
                  <div className="col-md-9">1,451 bytes</div>
                </div>
                <hr className="hr-space hr-gasTarget-top" />
                <div className="row align-items-center">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="The total gas used in the block and its percentage of gas filled in the block."
                    />
                    Gas Used:
                  </div>
                  <div className="col-md-9 d-flex align-items-center">
                    {ethGasUsed}
                    <div className="d-flex align-items-center">
                      <Gas />
                      <span id="gasTargetText" className="text-danger">
                        -52% Gas Target
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="hr-space hr-gasTarget-bottom" />
                <div className="row align-items-center">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="Total gas limit provided by all transactions in the block."
                    />
                    Gas Limit:
                  </div>
                  <div className="col-md-9">20,000,000</div>
                </div>
                <hr className="hr-space" />
                <div className="row align-items-center">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="Post-London Upgrade, this represents the minimum gasUsed multiplier required for a tx to be included in a block. "
                    />
                    Base Fee Per Gas:
                  </div>
                  <div className="col-md-9">
                    16 wei (0<b>.</b>000000016 Gwei)
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row align-items-center">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="Post-London Upgrade, this represents the part of the tx fee that is burnt: baseFeePerGas * gasUsed"
                    />
                    Burnt Fees:
                  </div>
                  <div className="col-md-9">
                    🔥 0<b>.</b>000000000077102848 MATIC
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="row align-items-center">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                    <i
                      className="fal fa-question-circle text-secondary mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="Any data that can be included by the miner in the block."
                    />
                    Extra Data:
                  </div>
                  <div className="col-md-9">
                    <textarea
                      readOnly=""
                      spellCheck="false"
                      className="form-control bg-light text-secondary text-monospace p-3"
                      rows={6}
                      id="extraData"
                      defaultValue={blockData.extraData}
                    />
                  </div>
                </div>
                <hr className="hr-space" />
                <div className="collapse show" id="collapsePanel" style={{}}>
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i
                        className="fal fa-question-circle text-secondary mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="The hash of the block header of the current block."
                      />
                      Hash:
                    </div>
                    <div className="col-md-9">{blockData.hash}</div>
                  </div>
                  <hr className="hr-space" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i
                        className="fal fa-question-circle text-secondary mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="The hash of the block from which this block was generated, also known as its parent block."
                      />
                      Parent Hash:
                    </div>
                    <div className="col-md-9">
                      <a href="/block/0x45f76d5cb94c3ea2b5a0477f585df09bf9ad32d3fa49f75b1c29c21daf474149">
                        {blockData.parentHash}
                      </a>
                    </div>
                  </div>
                  <hr className="hr-space" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i
                        className="fal fa-question-circle text-secondary mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="The mechanism which Polygon Javascript RLP encodes an empty string."
                      />
                      Sha3Uncles:
                    </div>
                    <div className="col-md-9">
                      0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347
                    </div>
                  </div>
                  <hr className="hr-space" />
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e">
                      <i
                        className="fal fa-question-circle text-secondary mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="Block nonce is a value used during mining to demonstrate proof of work for a block."
                      />
                      Nonce:
                    </div>
                    <div className="col-md-9">0x0000000000000000</div>
                  </div>
                  <hr className="hr-space" />
                </div>
                <span id="ContentPlaceHolder1_collapsedLink_span">
                  <a
                    className="d-block"
                    id="collapsedLink"
                    data-toggle="collapse"
                    href="#collapsePanel"
                    role="button"
                    aria-expanded="true"
                    aria-controls="collapsePanel"
                  >
                    <span>
                      Click to see <span className="card-arrow-more">more</span>{" "}
                      <span className="card-arrow-less">less</span>
                      <span className="card-btn-arrow card-btn-arrow--up ml-2">
                        <span className="fas fa-arrow-up small" />
                      </span>
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

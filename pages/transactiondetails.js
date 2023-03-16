import StyleTransaction from "../styles/block.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

export default function TransactionDetails() {
  const [transactionData, setTransactionData] = useState([]);
  const [gasPrice, setGasPrice] = useState("");
  const [gasLimit, setGasLimit] = useState("");
  const [value, setValue] = useState("");

  const router = useRouter();
  const { query } = router;
  const hash = Object.keys(query)[0];
  console.log("HASSS", hash);
  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/KFGiZ9X78dt4jBe16IjpjVXbhlPzuSx8"
  );

  const getDataOfTransaction = async () => {
    try {
      console.log(`getting the Trannsaction Data`);
      const result = await provider.waitForTransaction(hash, 2, 150000);
      console.log("RESULTTTTT", result);
      const transactionDetails = await provider.getTransaction(String(hash));
      setTransactionData(transactionDetails);
      console.log("TRANSAction DEtails ....", transactionDetails);

      const gasLimitePrice = ethers.utils.formatUnits(
        transactionDetails.gasLimit
      );
      setGasLimit(gasLimitePrice);

      const gasPriceCon = ethers.utils.formatUnits(transactionDetails.gasPrice);
      setGasPrice(gasPriceCon);

      const etherValue = ethers.utils.formatUnits(transactionDetails.value);
      setValue(etherValue);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataOfTransaction();
  }, [hash]);

  return (
    // <div className={StyleTransaction.block}>
    //   <div className={StyleTransaction.box}>
    //     <div className={StyleTransaction.box__header}>
    //       <h3>Transaction Hash</h3>
    //       <p>{hash}</p>
    //     </div>
    //     {transactionData !== [] && (
    //       <div className={StyleTransaction.blockTable}>
    //         <div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Number</p>
    //             <Link
    //               href={{
    //                 pathname: "/block/",
    //                 query: transactionData.blockNumber,
    //               }}
    //             >
    //               <p className={StyleTransaction.color}>
    //                 {transactionData.blockNumber}
    //               </p>
    //             </Link>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Block Hash</p>
    //             <p>{transactionData.blockHash}</p>
    //           </div>

    //           <div className={StyleTransaction.dataRow}>
    //             <p>From</p>
    //             <Link
    //               href={{ pathname: "/account/", query: transactionData.from }}
    //             >
    //               <p className={StyleTransaction.color}>
    //                 {transactionData.from}
    //               </p>
    //             </Link>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>To</p>
    //             <Link
    //               href={{ pathname: "/account/", query: transactionData.from }}
    //             >
    //               <p className={StyleTransaction.color}>{transactionData.to}</p>
    //             </Link>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Hash</p>
    //             <p>
    //               {transactionData.hash
    //                 ? transactionData.hash
    //                 : "No Data Avaliable"}
    //             </p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Nonce</p>
    //             <p>{transactionData.nonce}</p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Transaction Index</p>
    //             <p>
    //               {transactionData.transactionIndex
    //                 ? transactionData.transactionIndex
    //                 : "No Data Avaliable"}
    //             </p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>R</p>
    //             <p>{transactionData.r}</p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>S</p>
    //             <p>{transactionData.s}</p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Gas Limit</p>
    //             <p>{gasLimit} ETH</p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Gas Price</p>
    //             <p> {gasPrice} ETH</p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Type</p>
    //             <p>{transactionData.type} </p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>V</p>
    //             <p>{transactionData.v} </p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Value</p>
    //             <p>{value} ETH</p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Chain Id</p>
    //             <p>{transactionData.chainId} </p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Confirmations</p>
    //             <p>{transactionData.confirmations} </p>
    //           </div>
    //           <div className={StyleTransaction.dataRow}>
    //             <p>Transaction Index</p>
    //             <p>
    //               {transactionData.creates
    //                 ? transactionData.creates
    //                 : "No Data Avaliable"}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     )}
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
      <div className="container py-3 mn-b3">
        <div className="d-lg-flex justify-content-between align-items-center">
          <div className="mb-3 mb-lg-0">
            <h1 className="h4 mb-0">Transaction Details </h1>
          </div>
          <div className="d-flex flex-wrap mt-1 mt-md-0 flex-wrap ml-md-auto"></div>
        </div>
      </div>
      <div className="container space-bottom-2">
        <div className="card">
          <div className="card-header sticky-card-header d-flex justify-content-between p-0">
            <ul
              className="nav nav-custom nav-borderless nav_tabs1"
              id="nav_tabs"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  aria-controls="home"
                  aria-selected="true"
                  onclick="javascript:updatehash('');"
                >
                  Overview
                </a>
              </li>
              <li id="ContentPlaceHolder1_li_txreceiptlog" className="nav-item">
                <a
                  className="nav-link"
                  id="eventlog-tab"
                  data-toggle="tab"
                  href="#eventlog"
                  aria-controls="eventlog"
                  aria-selected="false"
                  onclick="javascript:updatehash('eventlog');"
                >
                  Logs (1)
                </a>
              </li>
            </ul>
            <div className="d-flex mr-3 mt-3">
              <div id="spinnerwait" style={{ display: "none" }}>
                <img src="/images/main/EllipsisSpinner3.svg?v=0.0.1" />
              </div>
              <div
                id="ContentPlaceHolder1_divVmTrace"
                className="position-relative d-none"
              >
                <a
                  href="javascript:;"
                  id="ContentPlaceHolder1_dropdownToolsInvoker"
                  data-unfold-animation-out="fadeOut"
                  aria-expanded="false"
                  data-unfold-type="css-animation"
                  data-unfold-target="#dropdownTools"
                  data-unfold-animation-in="slideInUp"
                  className="btn btn-xs btn-icon btn-soft-secondary"
                  data-unfold-event="click"
                  data-unfold-delay={300}
                  aria-haspopup="true"
                  data-unfold-hide-on-scroll="false"
                  role="button"
                  aria-controls="dropdownTools"
                  data-unfold-duration={300}
                >
                  <i className="fa fa-ellipsis-v btn-icon__inner" />
                </a>
                <div
                  id="dropdownTools"
                  className="dropdown-menu dropdown-menu-right dropdown-unfold u-unfold--css-animation u-unfold--hidden fadeOut"
                  aria-labelledby="dropdownToolsInvoker"
                  style={{ animationDuration: "300ms" }}
                >
                  <a
                    href="/vmtrace?txhash=0x6363f3b5a452d62d20222ebfbd2236553d040e1d16e01be19ba768c98d5b7552"
                    className="dropdown-item"
                  >
                    Geth Debug Trace
                  </a>
                  <a
                    href="/vmtrace?txhash=0x6363f3b5a452d62d20222ebfbd2236553d040e1d16e01be19ba768c98d5b7552&type=gethtrace2"
                    className="dropdown-item"
                  >
                    Geth Debug Trace_2
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div id="ContentPlaceHolder1_maintable" className="card-body">
                <div className="row align-items-center mb-4">
                  <div className="col-md-12 text-danger  font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                    [ This is a Frequency PoS <strong>Testnet</strong>{" "}
                    transaction only ]
                  </div>
                </div>{" "}
                <hr className="hr-space my-4" />
                <div className="row align-items-center mt-1 mb-4">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                    <i
                      className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="A TxHash or transaction hash is a unique 66-characters identifier that is generated whenever a transaction is executed."
                    />
                    Transaction Hash:
                  </div>
                  <div className="col-md-9">
                    <span id="spanTxHash" className="mr-1">
                      {transactionData.hash}
                    </span>
                    <a
                      className="js-clipboard text-secondary"
                      href="javascript:;"
                      data-toggle="tooltip"
                      title=""
                      data-content-target="#spanTxHash"
                      data-class-change-target="#spanTxHashLinkIcon"
                      data-success-text="Copied"
                      data-default-class="far fa-copy"
                      data-success-class="far fa-check-circle"
                      data-original-title="Copy TxHash to clipboard"
                    >
                      <span id="spanTxHashLinkIcon" className="far fa-copy" />
                    </a>
                  </div>
                </div>
                <div className="row align-items-center mb-4">
                  <div className="col-auto col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                    <i
                      className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="The status of the transaction."
                    />
                    Status:
                  </div>
                  <div className="col col-md-9">
                    <span
                      className="u-label u-label--sm u-label--value u-label--success rounded"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="A Status code indicating if the top-level call succeeded or failed (applicable for Post BYZANTIUM blocks only)"
                    >
                      <i className="fa fa-check-circle font-size-1 mr-1" />
                      Success
                    </span>
                  </div>
                </div>
                <div className="row align-items-center mb-4">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                    <i
                      className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was validated."
                    />
                    Block:
                  </div>
                  <div className="col-md-9">
                    <Link
                      href={{
                        pathname: "/blockdetails",
                        query: transactionData.blockNumber,
                      }}
                    >
                      {transactionData.blockNumber}
                    </Link>{" "}
                    <span
                      className="u-label u-label--xs u-label--badge-in u-label--secondary ml-1"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Number of blocks validated since"
                    >
                      {transactionData.confirmations} Block Confirmations
                    </span>
                  </div>
                </div>
                <div id="ContentPlaceHolder1_divTimeStamp">
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                      <i
                        className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="The date and time at which a transaction is validated."
                      />
                      Timestamp:
                    </div>
                    <div className="col-md-9">
                      <span id="clock" />
                      <i className="far fa-clock small mr-1" />
                      15 secs ago (Mar-16-2023 06:52:22 AM +UTC)
                    </div>
                  </div>
                </div>
                <hr className="hr-space my-4" />
                <div className="row align-items-center mb-4">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                    <i
                      className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="The sending party of the transaction."
                    />
                    From:
                  </div>
                  <div className="col-md-9">
                    <span id="spanFromAdd" style={{ display: "none" }}>
                      {transactionData.from}
                    </span>
                    <a
                      id="addressCopy"
                      className="mr-1"
                      href="/address/0xe72046c65a1051fa78672896f8f667633051abbc"
                    >
                      {transactionData.from}
                    </a>
                    <a
                      className="js-clipboard text-secondary ml-1"
                      href="javascript:;"
                      data-toggle="tooltip"
                      title=""
                      data-content-target="#spanFromAdd"
                      data-class-change-target="#fromAddressLinkIcon"
                      data-success-text="Copied"
                      data-default-class="far fa-copy"
                      data-success-class="far fa-check-circle"
                      data-original-title="Copy From Address to clipboard"
                    >
                      <span id="fromAddressLinkIcon" className="far fa-copy" />
                    </a>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                    <i
                      className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="The receiving party of the transaction (could be a contract address)."
                    />
                    To:
                  </div>
                  <div className="col-md-9">
                    Contract{" "}
                    <a
                      id="contractCopy"
                      href="/address/0xa689c3dbf06172a67c2356ee16d5baecd0346808"
                      className="wordwrap mr-1"
                    >
                      {transactionData.to}
                    </a>
                    <span id="spanToAdd" style={{ display: "none" }}>
                      {transactionData.to}
                    </span>
                    <i
                      className="fa fa-check-circle text-success mx-1 mb-2"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-title="Contract Execution Completed"
                      data-original-title=""
                      title=""
                    />
                    <a
                      className="js-clipboard text-muted ml-1"
                      href="javascript: ;"
                      data-toggle="tooltip"
                      title=""
                      data-content-target="#spanToAdd"
                      data-class-change-target="#spanToAddResult"
                      data-success-text="Copied"
                      data-default-class="far fa-copy"
                      data-success-class="far fa-check-circle"
                      data-original-title="Copy To Address to clipboard"
                    >
                      {" "}
                      <span id="spanToAddResult" className="far fa-copy" />{" "}
                    </a>
                  </div>
                </div>
                <hr className="hr-space my-4" />
                <div className="row align-items-center mb-4">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                    <i
                      className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="The value being transacted in MATIC and fiat value. Note: You can click the fiat value (if available) to see historical value at the time of transaction."
                    />
                    Value:
                  </div>
                  <div className="col-md-9">
                    <span id="ContentPlaceHolder1_spanValue">
                      <span
                        data-toggle="tooltip"
                        title=""
                        data-original-title="The amount of MATIC to be transferred to the recipient with the transaction"
                      >
                        <span className="u-label u-label--value u-label--secondary text-dark rounded mr-1">
                          {value} ETH
                        </span>
                      </span>{" "}
                      ($0.00)
                    </span>
                  </div>
                </div>
                <div id="ContentPlaceHolder1_divTxFee">
                  <div className="row align-items-center">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                      <i
                        className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="Amount paid to the miner for processing the transaction."
                      />
                      Transaction Fee:
                    </div>
                    <div className="col-md-9">
                      <span id="ContentPlaceHolder1_spanTxFee">
                        <span
                          data-toggle="tooltip"
                          title=""
                          data-original-title="(Block Base Fee Per Gas + MaxPriorityFee Per Gas) * Gas Used"
                        >
                          {gasLimit * gasPrice} ETH ($0.00)
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="hr-space my-4" />
                <div className="row align-items-center">
                  <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                    <i
                      className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-original-title=""
                      title=""
                      data-content="Cost per unit of gas specified for the transaction, in MATIC and Gwei. The higher the gas price the higher chance of getting included in a block."
                    />
                    Gas Price:
                  </div>
                  <div className="col-md-9">
                    <span
                      id="ContentPlaceHolder1_spanGasPrice"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="The price offered to the miner to purchase this amount of GAS （per GAS）"
                    >
                      {gasPrice}
                      Gwei
                    </span>
                  </div>
                </div>
                <div
                  id="ContentPlaceHolder1_collapseContent"
                  className="collapse"
                >
                  <div className="row align-items-center my-4">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                      <i
                        className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="Maximum amount of gas allocated for the transaction & the amount eventually used. Normal ETH transfers involve 21,000 gas units while contracts involve higher values."
                      />
                      Gas Limit &amp; Usage by Txn:
                    </div>
                    <div className="col-md-9">
                      <span
                        id="ContentPlaceHolder1_spanGasLimit"
                        title=""
                        data-toggle="tooltip"
                        data-original-title="The amount of GAS supplied for this transaction to happen"
                      >
                        {gasLimit}
                      </span>
                      <span className="mx-2 text-muted">|</span>
                      <span
                        id="ContentPlaceHolder1_spanGasUsedByTxn"
                        title=""
                        data-toggle="tooltip"
                        data-original-title="The amount of GAS used by this specific transaction alone"
                      >
                        {gasLimit}
                      </span>
                    </div>
                  </div>
                  <div
                    id="ContentPlaceHolder1_divGasFees"
                    className="row align-items-center mb-4"
                  >
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                      <i
                        className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="Base Fee refers to the network Base Fee at the time of the block, while Max Fee & Max Priority Fee refer to the max amount a user is willing to pay for their tx & to give to the miner respectively."
                      />
                      Gas Fees:
                    </div>
                    <div className="col-md-9">
                      <span
                        className="mr-1 mb-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="16 wei"
                      >
                        <span className="text-secondary">Base:</span> 0<b>.</b>
                        {gasLimit * gasPrice} Gwei
                      </span>{" "}
                      <span className="mx-2 text-muted">|</span>
                      <span
                        className="mr-1 mb-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="0.000000001500000032 MATIC"
                      >
                        <span className="text-secondary">Max:</span> 1<b>.</b>
                        {gasLimit * gasPrice} Gwei
                      </span>{" "}
                      <span className="mx-2 text-muted">|</span>
                      <span
                        className="mr-1 mb-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="0.0000000015 MATIC"
                      >
                        <span className="text-secondary">Max Priority:</span> 1
                        <b>.</b>5 Gwei
                      </span>
                    </div>
                  </div>
                  <div
                    id="ContentPlaceHolder1_divBurntAndTxSaving"
                    className="row align-items-center mb-4"
                  >
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                      <i
                        className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="Total amount of ETH burnt from this tx & total fees saved from the amount the user was willing to pay for this tx."
                      />
                      Burnt &amp; Txn Savings Fees:
                    </div>
                    <div className="col-md-9">
                      <span className="u-label u-label--value u-label--warning text-dark rounded mr-1 mb-1">
                        {" "}
                        🔥 Burnt: 0<b>.</b>000000000000656016 MATIC)
                      </span>
                      <span className="u-label u-label--value u-label--success text-dark rounded mr-1 mb-1">
                        {" "}
                        💸 Txn Savings: 0<b>.</b>000000000000656016 MATIC
                      </span>
                    </div>
                  </div>
                  <hr className="hr-space my-4" />
                  <div className="row mb-4">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                      <i
                        className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="Other data related to this transaction."
                      />
                      Other Attributes:
                    </div>
                    <div className="col-md-9">
                      <span id="ContentPlaceHolder1_spanTxnType">
                        <span className="u-label u-label--value u-label--secondary rounded mr-1 mb-1">
                          Txn Type:
                          <span className="text-dark">2 (EIP-1559)</span>
                        </span>
                      </span>
                      <span className="u-label u-label--value u-label--secondary rounded mr-1 mb-1">
                        Nonce:
                        <span className="text-dark">599</span>
                      </span>
                      <span className="u-label u-label--value u-label--secondary rounded mr-1 mb-1">
                        Position:
                        <span className="text-dark">10</span>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                      <i
                        className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="Additional data included for this transaction. Commonly used as part of conHelpMsg_Tx_Transaction_Hashtract interaction or as a message sent to the recipient."
                      />
                      Input Data:
                    </div>
                    <div className="col-md-9">
                      <div id="rawtab" data-target-group="inputDataGroup">
                        <div
                          id="ContentPlaceHolder1_btnconvert222"
                          className="d-flex align-items-center mt-2"
                        >
                          <div className="position-relative mr-2">
                            <span className="dropdown">
                              <button
                                className="btn btn-xss btn-secondary dropdown-toggle"
                                type="button"
                                id="btnconvert222_1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                View Input As
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="btnconvert222_1"
                              >
                                <a
                                  id="convert_default"
                                  href="javascript:;"
                                  className="dropdown-item active"
                                  onclick="javascript:convertstr2(document.getElementById('inputdata').innerHTML, 'default');"
                                >
                                  Default View
                                </a>
                                <a
                                  id="convert_utf"
                                  href="javascript:;"
                                  className="dropdown-item"
                                  onclick="javascript:convertstr2(document.getElementById('inputdata').innerHTML, 'hex');"
                                >
                                  UTF-8
                                </a>
                                <a
                                  id="convert_original"
                                  href="javascript:;"
                                  className="dropdown-item"
                                  onclick="javascript:convertstr2(document.getElementById('inputdata').innerHTML, 'original');"
                                >
                                  Original
                                </a>
                              </div>
                            </span>
                          </div>
                          <a
                            href="javascript:;"
                            id="ContentPlaceHolder1_btnDecodetab"
                            onclick="javascript:decodeInput();btnDecodeClick();"
                            className="js-animation-link btn btn-xss btn-secondary"
                            data-target="#decodetab"
                            data-link-group="inputDataGroup"
                            data-animation-in="fade"
                          >
                            <i className="fa fa-cubes mr-1" /> Decode Input Data
                          </a>
                        </div>
                      </div>
                      <div
                        id="decodetab"
                        data-target-group="inputDataGroup"
                        style={{ display: "none", opacity: 0 }}
                      >
                        <div id="loadingtxframe">
                          <div id="overlayMain" align="center">
                            <img
                              src="/images/main/loadingblock.svg"
                              alt="Loading"
                            />
                          </div>
                        </div>
                        <div id="decodebox" style={{ display: "none" }}>
                          <div
                            className="js-scrollbar scrollbox mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar"
                            style={{
                              position: "relative",
                              overflow: "visible",
                            }}
                          >
                            <div
                              id="mCSB_1"
                              className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                              style={{ maxHeight: "none" }}
                              tabIndex={0}
                            >
                              <div
                                id="mCSB_1_container"
                                className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                style={{
                                  position: "relative",
                                  top: 0,
                                  left: 0,
                                }}
                                dir="ltr"
                              >
                                <div
                                  id="inputDecode"
                                  className="bg-light table-responsive"
                                />
                              </div>
                            </div>
                            <div
                              id="mCSB_1_scrollbar_vertical"
                              className="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                              style={{ display: "none" }}
                            >
                              <div className="mCSB_draggerContainer">
                                <div
                                  id="mCSB_1_dragger_vertical"
                                  className="mCSB_dragger"
                                  style={{
                                    position: "absolute",
                                    minHeight: 50,
                                    top: 0,
                                  }}
                                >
                                  <div
                                    className="mCSB_dragger_bar"
                                    style={{ lineHeight: 50 }}
                                  />
                                  <div className="mCSB_draggerRail" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="javascript:;"
                            className="js-animation-link btn btn-xss btn-secondary mt-2"
                            onclick="javascript:btnSwitchClick();"
                          >
                            <i className="fa fa-undo txhash-icon" /> Switch Back
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="hr-space my-4" />
                <div id="ContentPlaceHolder1_collapsedLink_span">
                  <a
                    className="d-block collapsed"
                    id="collapsedLink"
                    href="#ContentPlaceHolder1_collapseContent"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="ContentPlaceHolder1_collapseContent"
                  >
                    <span>
                      Click to see <span className="card-arrow-more">More</span>{" "}
                      <span className="card-arrow-less">Less</span>
                      <span className="card-btn-arrow card-btn-arrow--up ml-2">
                        <span className="fas fa-arrow-up small" />
                      </span>
                    </span>
                  </a>
                </div>
                <div id="ContentPlaceHolder1_privatenotediv">
                  <hr className="hr-space my-4" />
                  <div className="row">
                    <div className="col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0">
                      <i
                        className="fal fa-question-circle text-secondary d-none d-sm-inline-block mr-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="top"
                        data-original-title=""
                        title=""
                        data-content="Private note to keep track of the transaction. Only viewable to PolygonScan's user who assign them."
                      />
                      Private Note:{" "}
                      <i
                        id="ContentPlaceHolder1_infoPrivateNote"
                        className="fa fa-info-circle text-secondary"
                        rel="tooltip"
                        data-placement="right"
                        style={{ display: "none" }}
                        title=""
                        data-toggle="tooltip"
                        data-original-title="You can attach a private note to this transaction which you can view when logged in"
                      />
                    </div>
                    <div className="col-md-9">
                      To access the Private Note feature, you must be{" "}
                      <a href="/login?returntx=0x6363f3b5a452d62d20222ebfbd2236553d040e1d16e01be19ba768c98d5b7552">
                        Logged In
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="internal"
              role="tabpanel"
              aria-labelledby="internal-tab"
            >
              <div
                className="ml-auto float-right mr-4 mt-3 mb-4 d-none"
                id="divswitch"
                data-container="body"
                data-toggle="popover"
                data-placement="top"
                data-original-title=""
                title=""
                data-content="Toggle between Simplified and Advanced view. The 'Advanced' view also shows zero value ETH transfers, while the 'Simple' view only shows ETH transfers with value. Name tags integration is not available in advanced view"
                style={{ display: "none" }}
              >
                <div className="d-flex">
                  <label
                    className="checkbox-switch mb-0"
                    id="labelswitch"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-original-title=""
                    title=""
                  >
                    <input
                      type="checkbox"
                      className="checkbox-switch__input"
                      id="customSwitch1"
                      onclick="toggleMode();"
                    />
                    <span className="checkbox-switch__slider" />
                  </label>
                  <span className="ml-1" id="toggletext">
                    Simple
                  </span>
                </div>
              </div>
              <div className="card-body mt-1">
                Invoked Transactions
                <div
                  id="ContentPlaceHolder1_divinternaltable"
                  className="table-responsive mb-2 mb-md-0"
                >
                  <table className="table table-hover table-align-middle">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Type Trace Address</th>
                        <th scope="col" width={180}>
                          From
                        </th>
                        <th scope="col" width={30} />
                        <th scope="col">To</th>
                        <th scope="col">Value</th>
                        <th scope="col">Gas Limit</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="eventlog"
              role="tabpanel"
              aria-labelledby="eventlog-tab"
            >
              <div className="card-body">
                <h6 className="font-weight-normal mb-4">
                  Transaction Receipt Event Logs
                </h6>
                <div className="media">
                  <div className="mt-1 mr-3">
                    <span className="btn btn-icon btn-soft-success rounded-circle">
                      <span className="btn-icon__inner">27</span>
                    </span>
                  </div>
                  <div className="media-body">
                    <dl className="row align-items-baseline mb-3">
                      <dt className="col-md-2 col-lg-1 text-md-right">
                        <h6 className="font-weight-bold mb-0">Address</h6>
                      </dt>
                      <dd className="col-md-10 mb-0">
                        <a
                          className="text-break mr-2"
                          href="/address/0x0000000000000000000000000000000000001010"
                        >
                          0x0000000000000000000000000000000000001010
                        </a>
                        <span className="dropdown">
                          <button
                            className="btn btn-xss btn-custom dropdown-toggle"
                            type="button"
                            id="matchDropdown-0"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-search-plus" />
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="matchDropdown-0"
                          >
                            <a
                              className="dropdown-item"
                              href="/txs?ea=0x0000000000000000000000000000000000001010&topic0=0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63"
                            >
                              Matches Topic[0]
                            </a>
                          </div>
                        </span>
                      </dd>
                    </dl>
                    <dl className="row align-items-baseline mb-3">
                      <dt className="col-md-2 col-lg-1 text-md-right">
                        <h6 className="mb-0">Topics</h6>
                      </dt>
                      <dd className="col-md-10 mb-0">
                        <ul className="list-unstyled list-xs-space mb-0">
                          <li>
                            <span className="u-label u-label--xs u-label--secondary rounded mr-1">
                              0
                            </span>
                            &nbsp;
                            <span className="text-monospace text-break">
                              0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63
                            </span>
                          </li>
                          <li>
                            <span className="u-label u-label--xs u-label--secondary rounded mr-1">
                              1
                            </span>{" "}
                            <i className="fa fa-long-arrow-alt-right text-secondary mx-1" />
                            <span
                              className="text-monospace text-break"
                              id="chunk_decode_0_1"
                            >
                              0x0000000000000000000000000000000000000000000000000000000000001010
                            </span>
                          </li>
                          <li>
                            <span className="u-label u-label--xs u-label--secondary rounded mr-1">
                              2
                            </span>{" "}
                            <i className="fa fa-long-arrow-alt-right text-secondary mx-1" />
                            <span
                              className="text-monospace text-break"
                              id="chunk_decode_0_2"
                            >
                              0x000000000000000000000000e72046c65a1051fa78672896f8f667633051abbc
                            </span>
                          </li>
                          <li>
                            <span className="u-label u-label--xs u-label--secondary rounded mr-1">
                              3
                            </span>{" "}
                            <i className="fa fa-long-arrow-alt-right text-secondary mx-1" />
                            <span
                              className="text-monospace text-break"
                              id="chunk_decode_0_3"
                            >
                              0x0000000000000000000000003a22c8bc68e98b0faf40f349dd2b2890fae01484
                            </span>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                    <dl className="row align-items-baseline mb-0">
                      <dt className="col-md-2 col-lg-1 text-md-right">
                        <h6 className="font-italic mb-0">Data</h6>
                      </dt>
                      <dd className="col-md-10 mb-0">
                        <ul className="list-unstyled list-xs-space bg-light rounded p-4 mb-0">
                          <li>
                            <span className="dropdown">
                              <button
                                className="btn btn-xss btn-custom dropdown-toggle"
                                type="button"
                                id="convert_button_1_1"
                                data-toggle="dropdown"
                                aria-haspopup="True"
                                aria-expanded="False"
                              >
                                Hex
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="convert_button_1_1"
                              >
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Hex', '1_1');"
                                >
                                  Hex
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Num', '1_1');"
                                >
                                  Number
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Text', '1_1');"
                                >
                                  Text
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Addr', '1_1');"
                                >
                                  Address
                                </a>
                              </div>
                              <span>
                                <i className="fa fa-long-arrow-alt-right mx-1" />
                                <span
                                  className="text-monospace text-break"
                                  id="chunk_1_1"
                                >
                                  000000000000000000000000000000000000000000000000000037ef6f0f8700
                                </span>
                                <span
                                  style={{ display: "none" }}
                                  id="chunk_ori_1_1"
                                >
                                  000000000000000000000000000000000000000000000000000037ef6f0f8700
                                </span>
                              </span>
                            </span>
                          </li>
                          <li>
                            <span className="dropdown">
                              <button
                                className="btn btn-xss btn-custom dropdown-toggle"
                                type="button"
                                id="convert_button_1_2"
                                data-toggle="dropdown"
                                aria-haspopup="True"
                                aria-expanded="False"
                              >
                                Hex
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="convert_button_1_2"
                              >
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Hex', '1_2');"
                                >
                                  Hex
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Num', '1_2');"
                                >
                                  Number
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Text', '1_2');"
                                >
                                  Text
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Addr', '1_2');"
                                >
                                  Address
                                </a>
                              </div>
                              <span>
                                <i className="fa fa-long-arrow-alt-right mx-1" />
                                <span
                                  className="text-monospace text-break"
                                  id="chunk_1_2"
                                >
                                  00000000000000000000000000000000000000000000000022c72dd5f453e40f
                                </span>
                                <span
                                  style={{ display: "none" }}
                                  id="chunk_ori_1_2"
                                >
                                  00000000000000000000000000000000000000000000000022c72dd5f453e40f
                                </span>
                              </span>
                            </span>
                          </li>
                          <li>
                            <span className="dropdown">
                              <button
                                className="btn btn-xss btn-custom dropdown-toggle"
                                type="button"
                                id="convert_button_1_3"
                                data-toggle="dropdown"
                                aria-haspopup="True"
                                aria-expanded="False"
                              >
                                Hex
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="convert_button_1_3"
                              >
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Hex', '1_3');"
                                >
                                  Hex
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Num', '1_3');"
                                >
                                  Number
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Text', '1_3');"
                                >
                                  Text
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Addr', '1_3');"
                                >
                                  Address
                                </a>
                              </div>
                              <span>
                                <i className="fa fa-long-arrow-alt-right mx-1" />
                                <span
                                  className="text-monospace text-break"
                                  id="chunk_1_3"
                                >
                                  0000000000000000000000000000000000000000000003e7595e579f290c664d
                                </span>
                                <span
                                  style={{ display: "none" }}
                                  id="chunk_ori_1_3"
                                >
                                  0000000000000000000000000000000000000000000003e7595e579f290c664d
                                </span>
                              </span>
                            </span>
                          </li>
                          <li>
                            <span className="dropdown">
                              <button
                                className="btn btn-xss btn-custom dropdown-toggle"
                                type="button"
                                id="convert_button_1_4"
                                data-toggle="dropdown"
                                aria-haspopup="True"
                                aria-expanded="False"
                              >
                                Hex
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="convert_button_1_4"
                              >
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Hex', '1_4');"
                                >
                                  Hex
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Num', '1_4');"
                                >
                                  Number
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Text', '1_4');"
                                >
                                  Text
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Addr', '1_4');"
                                >
                                  Address
                                </a>
                              </div>
                              <span>
                                <i className="fa fa-long-arrow-alt-right mx-1" />
                                <span
                                  className="text-monospace text-break"
                                  id="chunk_1_4"
                                >
                                  00000000000000000000000000000000000000000000000022c6f5e685445d0f
                                </span>
                                <span
                                  style={{ display: "none" }}
                                  id="chunk_ori_1_4"
                                >
                                  00000000000000000000000000000000000000000000000022c6f5e685445d0f
                                </span>
                              </span>
                            </span>
                          </li>
                          <li>
                            <span className="dropdown">
                              <button
                                className="btn btn-xss btn-custom dropdown-toggle"
                                type="button"
                                id="convert_button_1_5"
                                data-toggle="dropdown"
                                aria-haspopup="True"
                                aria-expanded="False"
                              >
                                Hex
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="convert_button_1_5"
                              >
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Hex', '1_5');"
                                >
                                  Hex
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Num', '1_5');"
                                >
                                  Number
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Text', '1_5');"
                                >
                                  Text
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:funcOnclick('Addr', '1_5');"
                                >
                                  Address
                                </a>
                              </div>
                              <span>
                                <i className="fa fa-long-arrow-alt-right mx-1" />
                                <span
                                  className="text-monospace text-break"
                                  id="chunk_1_5"
                                >
                                  0000000000000000000000000000000000000000000003e7595e8f8e981bed4d
                                </span>
                                <span
                                  style={{ display: "none" }}
                                  id="chunk_ori_1_5"
                                >
                                  0000000000000000000000000000000000000000000003e7595e8f8e981bed4d
                                </span>
                              </span>
                            </span>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="mb-5" />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="accesslist"
              role="tabpanel"
              aria-labelledby="accesslist-tab"
            >
              <div className="card-body">
                <h6 className="font-weight-normal mb-4"></h6>
                <pre />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

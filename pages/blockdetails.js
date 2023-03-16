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
  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/KFGiZ9X78dt4jBe16IjpjVXbhlPzuSx8"
  );

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
              <span className="small text-secondary">&nbsp;#33177011</span>
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
                    [ This is a POLY <strong>Testnet</strong> block only ]
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
                      <span className="font-weight-sm-bold mr-2">33177011</span>
                      <a
                        className="btn btn-xs btn-icon btn-soft-info mr-1"
                        href="/block/33177010"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="View previous block"
                      >
                        <i className="fa fa-chevron-left btn-icon__inner" />
                      </a>
                      <a
                        className="btn btn-xs btn-icon btn-soft-info mr-1"
                        href="/block/33177012"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="View next block"
                      >
                        <i className="fa fa-chevron-right btn-icon__inner" />
                      </a>
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
                    <i className="far fa-clock small mr-1" />1 hr 59 mins ago
                    (Mar-16-2023 08:37:00 AM +UTC)
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
                        5 transactions
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
                      0xc275dc8be39f50d12f66b6a63629c39da5bae5bd
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
                  <div className="col-md-9">5</div>
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
                    4,818,928 (24.09%)
                    <div className="d-flex align-items-center">
                      <span
                        id="gasTargetChart"
                        data-highcharts-chart={0}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          id="highcharts-7mur81n-0"
                          dir="ltr"
                          className="highcharts-container "
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            width: 80,
                            height: 40,
                            textAlign: "left",
                            lineHeight: "normal",
                            zIndex: 0,
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            userSelect: "none",
                            touchAction: "manipulation",
                            outline: "none",
                          }}
                        >
                          <svg
                            version="1.1"
                            className="highcharts-root"
                            style={{
                              fontFamily:
                                '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                              fontSize: 12,
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={80}
                            height={40}
                            viewBox="0 0 80 40"
                          >
                            <desc>Created with Highcharts 9.1.2</desc>
                            <defs>
                              <clipPath id="highcharts-7mur81n-2-">
                                <rect
                                  x={0}
                                  y={0}
                                  width={80}
                                  height={40}
                                  fill="none"
                                />
                              </clipPath>
                            </defs>
                            <rect
                              fill="#ffffff"
                              className="highcharts-background"
                              x={0}
                              y={0}
                              width={80}
                              height={40}
                              rx={0}
                              ry={0}
                            />
                            <rect
                              fill="none"
                              className="highcharts-plot-background"
                              x={0}
                              y={0}
                              width={80}
                              height={40}
                            />
                            <g
                              className="highcharts-pane-group"
                              data-z-index={0}
                            >
                              <path
                                fill="#EEE"
                                d="M 20 27.999999999999996 A 20 20 0 0 1 59.999990000000835 27.98000000333334 L 51.9999940000005 27.988000002000007 A 12 12 0 0 0 28 28 Z"
                                className="highcharts-pane "
                                stroke="#cccccc"
                                strokeWidth={1}
                              />
                            </g>
                            <g
                              className="highcharts-grid highcharts-yaxis-grid highcharts-radial-axis-grid"
                              data-z-index={1}
                            >
                              <path
                                fill="none"
                                strokeDasharray="none"
                                data-z-index={1}
                                className="highcharts-grid-line"
                                d="M 28 27.999999999999996 L 20 27.999999999999996"
                                opacity={1}
                              />
                              <path
                                fill="none"
                                strokeDasharray="none"
                                data-z-index={1}
                                className="highcharts-grid-line"
                                d="M 52 28.000000000000004 L 60 28.000000000000007"
                                opacity={1}
                              />
                            </g>
                            <rect
                              fill="none"
                              className="highcharts-plot-border"
                              data-z-index={1}
                              x={0}
                              y={0}
                              width={80}
                              height={40}
                            />
                            <g
                              className="highcharts-axis highcharts-yaxis highcharts-radial-axis"
                              data-z-index={2}
                            >
                              <path
                                fill="none"
                                className="highcharts-axis-line"
                                data-z-index={7}
                                d="M 20 27.999999999999996 A 20 20 0 0 1 59.999990000000835 27.980000003333334 M 40 28 A 0 0 0 0 0 40 28"
                              />
                            </g>
                            <g
                              className="highcharts-series-group"
                              data-z-index={3}
                            >
                              <g
                                className="highcharts-series highcharts-series-0 highcharts-solidgauge-series highcharts-tracker"
                                data-z-index="0.1"
                                opacity={1}
                                transform="translate(0,0) scale(1 1)"
                                clipPath="url(#highcharts-7mur81n-2-)"
                              >
                                <path
                                  fill="rgb(223,83,83)"
                                  d="M 20 27.999999999999996 A 20 20 0 0 1 25.40694380142069 14.323644097015242 L 31.244166280852415 19.794186458209147 A 12 12 0 0 0 28 28 Z"
                                  sweep-flag={0}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="highcharts-point highcharts-color-0"
                                />
                              </g>
                              <g
                                className="highcharts-markers highcharts-series-0 highcharts-solidgauge-series"
                                data-z-index="0.1"
                                opacity={1}
                                transform="translate(0,0) scale(1 1)"
                                clipPath="none"
                              />
                            </g>
                            <text
                              x={40}
                              textAnchor="middle"
                              className="highcharts-title"
                              data-z-index={4}
                              style={{
                                color: "#333333",
                                fontSize: 18,
                                fill: "#333333",
                              }}
                              y={24}
                            />
                            <text
                              x={40}
                              textAnchor="middle"
                              className="highcharts-subtitle"
                              data-z-index={4}
                              style={{ color: "#666666", fill: "#666666" }}
                              y={24}
                            />
                            <text
                              x={10}
                              textAnchor="start"
                              className="highcharts-caption"
                              data-z-index={4}
                              style={{ color: "#666666", fill: "#666666" }}
                              y={37}
                            />
                            <g
                              className="highcharts-legend highcharts-no-tooltip"
                              data-z-index={7}
                            >
                              <rect
                                fill="none"
                                className="highcharts-legend-box"
                                rx={0}
                                ry={0}
                                x={0}
                                y={0}
                                width={8}
                                height={8}
                                visibility="hidden"
                              />
                              <g data-z-index={1}>
                                <g />
                              </g>
                            </g>
                            <g
                              className="highcharts-axis-labels highcharts-yaxis-labels highcharts-radial-axis-labels"
                              data-z-index={7}
                            />
                          </svg>
                        </div>
                      </span>
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
                      defaultValue={
                        "Hex: 0xd682030683626f7288676f312e31392e37856c696e7578000000000000000000e4f2d987316bf15cedd65b754435d91247535a36efee5a8705c3c8336f68bef74dcebcbfbb495847ac8ff262ab04542de8cb127e08d029686bb51e479582856d00\n\nExtraVanity : ւ\u0003\u0006�bor�go1.19.7�linux���������\nSignedData : 0xe4f2d987316bf15cedd65b754435d91247535a36efee5a8705c3c8336f68bef74dcebcbfbb495847ac8ff262ab04542de8cb127e08d029686bb51e479582856d00"
                      }
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
                    <div className="col-md-9">
                      0xece2d92487c985c66d4a2afd0dbd95b9e587374c27274269b38eb1ed41c50526
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
                        data-content="The hash of the block from which this block was generated, also known as its parent block."
                      />
                      Parent Hash:
                    </div>
                    <div className="col-md-9">
                      <a href="/block/0x45f76d5cb94c3ea2b5a0477f585df09bf9ad32d3fa49f75b1c29c21daf474149">
                        0x45f76d5cb94c3ea2b5a0477f585df09bf9ad32d3fa49f75b1c29c21daf474149
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

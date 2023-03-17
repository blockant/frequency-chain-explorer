import { useState, useEffect } from "react";
import StyleTransaction from "../styles/block.module.css";
import Link from "next/link";
import Style from "../styles/Table.module.css";
import { useRouter } from "next/router";
import { ethers } from "ethers";

export default function blocks() {
  const [blocks, setBlocks] = useState([]);
  const [latestBlockNumber, setLatestBlockNumber] = useState();
  const router = useRouter();

  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/KFGiZ9X78dt4jBe16IjpjVXbhlPzuSx8"
  );
  const fetchBlocks = async () => {
    const latestBlockNumber = await provider.getBlockNumber();
    setLatestBlockNumber(latestBlockNumber);
    const blockTransaction = await provider.getBlock(latestBlockNumber);
    console.log("TRANSACTIONS", blockTransaction.transactions);

    const blockPromises = [];
    for (let i = 0; i < 24; i++) {
      const blockNumber = latestBlockNumber - i;
      const blockPromise = provider.getBlock(blockNumber);
      blockPromises.push(blockPromise);
    }
    const blocks = await Promise.all(blockPromises);
    setBlocks(blocks);
  };

  useEffect(() => {
    fetchBlocks();
  }, []);
  console.log(blocks);
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
        defaultValue="(Gas Price * Gas Used by Txns) in FREC"
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
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center py-3">
          <div className="mb-1 mb-md-0">
            <h1 className="h4 font-weight-normal mb-0">
              Blocks&nbsp;
              <span className="small text-secondary" />
              <p className="mb-0 text-break small">
                <span className="small text-secondary" />
              </p>
            </h1>
          </div>
          <div className="d-flex align-items-center">
            <div className="mr-1">
              <span
                className="ml-2 u-label u-label--sm u-label--secondary text-dark font-size-1 rounded py-1 px-3"
                data-toggle="tooltip"
                title=""
                data-original-title="Avg Network Utilization (Blocks on this page)"
              >
                Network Utilization: 5.4%
              </span>
            </div>
            <a
              href="https://burn.polygon.technology/?network=testnet"
              target="_blank"
              rel="nofollow noopener"
            >
              <div>
                <span
                  style={{ minWidth: 68 }}
                  className="u-label u-label--sm u-label--warning rounded text-dark text-center"
                >
                  <span
                    data-toggle="tooltip"
                    data-boundary="viewport"
                    data-html="true"
                    title=""
                    data-original-title="Total Sum of Fees Burnt since the introduction of EIP-1559"
                    aria-describedby="tooltip847798"
                  >
                    🔥 Burnt Fees:{" "}
                  </span>
                  <span>53,420.26 FREC</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container space-bottom-2">
        <div className="card">
          <div className="card-body">
            <div
              id="ContentPlaceHolder1_topPageDiv"
              className="d-md-flex justify-content-between mb-4"
            >
              <p className="mb-2 mb-md-0">
                <i
                  id="spinwheel"
                  className="fa fa-spin fa-spinner fa-1x fa-pulse mr-1"
                  style={{ display: "none" }}
                />
                Block #{latestBlockNumber} to #{latestBlockNumber - 100} (Total
                of 33,214,609 blocks)
              </p>
              <nav aria-label="page navigation">
                <ul className="pagination pagination-sm mb-0">
                  <li className="page-item disabled">
                    <span className="page-link">First</span>
                  </li>
                  <li className="page-item disabled">
                    <span className="page-link">
                      <i className="fa fa-chevron-left small" />
                    </span>
                    <span className="sr-only">Previous</span>
                  </li>
                  <li className="page-item disabled">
                    <span className="page-link text-nowrap">
                      Page <strong className="font-weight-medium">1</strong> of{" "}
                      <strong className="font-weight-medium">1328585</strong>
                    </span>
                  </li>
                  <li
                    className="page-item"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Go to Next"
                  >
                    <a
                      className="page-link"
                      href="blocks?p=2"
                      aria-label="Next"
                    >
                      <span aria-hidden="True">
                        <i className="fa fa-chevron-right small" />
                      </span>{" "}
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="blocks?p=1328585">
                      <span aria-hidden="True">Last</span>{" "}
                      <span className="sr-only">Last</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="table-responsive mb-2 mb-md-0">
              <table className="table table-hover">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Block</th>
                    <th scope="col">
                      <a
                        href="javascript:;"
                        onclick="switchAgeToDateTime(this)"
                        id="lnkAgeDateTime"
                        title=""
                        data-toggle-commonjs="tooltip"
                        data-original-title="Click to show Datetime Format"
                      >
                        Age
                      </a>
                    </th>
                    <th scope="col">Txn</th>
                    <th scope="col">Validator</th>
                    <th scope="col">Gas Used</th>
                    <th scope="col">Gas Limit</th>
                    <th scope="col">Base Fee</th>
                    <th scope="col">Reward</th>
                    <th
                      scope="col"
                      title="Percentage of FeesBurnt/TxFees Earned (excluding base block reward)"
                    >
                      Burnt Fees (FREC)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {blocks.map((block, i) => (
                    <tr key={i}>
                      <td>
                        <Link
                          href={{
                            pathname: "/blockdetails",
                            query: block.number,
                          }}
                        >
                          {block.number}
                        </Link>
                      </td>

                      <td style={{}} className="showAge ">
                        <span
                          rel="tooltip"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="2023-03-17 6:48:34"
                        >
                          8 secs ago
                        </span>
                      </td>
                      <td>
                        <a href="/txs?block=33214608">
                          {block.transactions.length}
                        </a>
                      </td>
                      <td>
                        <a
                          href="/address/0xc26880a0af2ea0c7e8130e6ec47af756465452e8"
                          className="hash-tag text-truncate"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="0xc26880a0af2ea0c7e8130e6ec47af756465452e8"
                        >
                          {block.miner}
                        </a>
                      </td>
                      <td>
                        {ethers.utils.formatEther(block.gasUsed)}{" "}
                        <span className="small text-secondary">
                          (
                          <span
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Gas Used %"
                          >
                            1.75%
                          </span>
                          ,{" "}
                          <span
                            data-toggle="tooltip"
                            title=""
                            data-original-title="% of Gas Target"
                          >
                            -97%
                          </span>
                          )
                        </span>
                        <div className="progress mt-1" style={{ height: 2 }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "1.75%" }}
                            aria-valuenow="1.75"
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </td>
                      <td>{ethers.utils.formatEther(block.gasLimit)}</td>
                      <td>0 Gwei</td>
                      <td>
                        0<b>.</b>00071 FREC
                      </td>
                      <td>
                        {ethers.utils.formatEther(block.baseFeePerGas)}{" "}
                        <span className="small text-secondary">(0.00%)</span>
                        <div className="progress mt-1" style={{ height: 2 }}>
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "0.00%" }}
                            aria-valuenow={0.0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div id="ContentPlaceHolder1_pageRecords">
              <form method="post" action="./blocks?p=1" id="ctl00">
                <div className="aspNetHidden">
                  <input
                    type="hidden"
                    name="__EVENTTARGET"
                    id="__EVENTTARGET"
                    defaultValue=""
                  />
                  <input
                    type="hidden"
                    name="__EVENTARGUMENT"
                    id="__EVENTARGUMENT"
                    defaultValue=""
                  />
                  <input
                    type="hidden"
                    name="__LASTFOCUS"
                    id="__LASTFOCUS"
                    defaultValue=""
                  />
                  <input
                    type="hidden"
                    name="__VIEWSTATE"
                    id="__VIEWSTATE"
                    defaultValue="56ouKsZqX6668T6FE08LLKDb2aZJR4pdM4+mJXF32Fwv5ks45Vh+3dE5q2VR+8XM0/GBu7csj9kohvOrwy70aDRYxcIYc+TkpT8JaBqklpg="
                  />
                </div>
                <div className="aspNetHidden">
                  <input
                    type="hidden"
                    name="__VIEWSTATEGENERATOR"
                    id="__VIEWSTATEGENERATOR"
                    defaultValue="1E110816"
                  />
                  <input
                    type="hidden"
                    name="__EVENTVALIDATION"
                    id="__EVENTVALIDATION"
                    defaultValue="yh5GIBFDlLxfw284/N/LsXXWzCuxKtVg4i3BqRORtm47Iv8Xf8VXkt9ZIAbcHdqVnYpyiRtjmq7VMgBqpZTs6waUvVuGE8smG6d81ytm/9uPl8ZEAiaRAfLwXmITs0E1fmx0MZQWoz1NMba2DALa4cGCIsQRLaUIdGnSEqo8kCKZekXZ9w8VQ5CZz7qB9KMsnlg/DYIGEZYqrmZqr7SZeg=="
                  />
                </div>
                <div className="d-md-flex justify-content-between my-3">
                  <div className="d-flex align-items-center text-secondary mb-2 mb-md-0">
                    Show
                    <select
                      name="ctl00$ContentPlaceHolder1$ddlRecordsPerPage"
                      onchange="javascript:setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$ddlRecordsPerPage\',\'\')', 0)"
                      id="ContentPlaceHolder1_ddlRecordsPerPage"
                      className="custom-select custom-select-xs mx-2"
                    >
                      <option value={10}>10</option>
                      <option selected="selected" value={25}>
                        25
                      </option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                    Records
                  </div>
                  <nav className="mb-4 mb-md-0" aria-label="page navigation">
                    <ul className="pagination pagination-sm mb-0">
                      <li className="page-item disabled">
                        <span className="page-link">First</span>
                      </li>
                      <li className="page-item disabled">
                        <span className="page-link">
                          <i className="fa fa-chevron-left small" />
                        </span>
                        <span className="sr-only">Previous</span>
                      </li>
                      <li className="page-item disabled">
                        <span className="page-link text-nowrap">
                          Page <strong className="font-weight-medium">1</strong>{" "}
                          of{" "}
                          <strong className="font-weight-medium">
                            1328585
                          </strong>
                        </span>
                      </li>
                      <li
                        className="page-item"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Go to Next"
                      >
                        <a
                          className="page-link"
                          href="blocks?p=2"
                          aria-label="Next"
                        >
                          <span aria-hidden="True">
                            <i className="fa fa-chevron-right small" />
                          </span>{" "}
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="blocks?p=1328585">
                          <span aria-hidden="True">Last</span>{" "}
                          <span className="sr-only">Last</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

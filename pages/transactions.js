import { useState, useEffect } from "react";
import StyleTransaction from "../styles/block.module.css";
import Link from "next/link";
import Style from "../styles/Table.module.css";
import { useRouter } from "next/router";
import { ethers } from "ethers";

export default function Transactions() {
  const [allTransactions, setAllTransactions] = useState([]);
  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/KFGiZ9X78dt4jBe16IjpjVXbhlPzuSx8"
  );
  const fetchTransactions = async () => {
    const latestBlockNumber = await provider.getBlockNumber();

    const blockTransaction = await provider.getBlock(latestBlockNumber);
    const transactionArray = blockTransaction.transactions;

    const transactions = [];
    for (let i = 0; i < 24; i++) {
      const blockNumber = latestBlockNumber - i;
      const blockPromise = await provider.getBlock(blockNumber);

      blockPromise.transactions.map(async (tx) => {
        const transactionDetails = await provider.getTransaction(String(tx));
        transactions.push(transactionDetails);
      });
    }
    console.log("TRANSACTIONS", transactions);
    transactions.map((tx) => {
      console.log("ITEMS", tx);
    });
    setAllTransactions(transactions);
  };

  useEffect(() => {
    fetchTransactions();
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
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center py-3">
          <div className="mb-1 mb-md-0">
            <h1 className="h4 mb-0">
              Transactions&nbsp;
              <span className="small text-secondary" />
              <p className="mb-0 text-break small"></p>
            </h1>
          </div>
        </div>
      </div>
      <div className="container space-bottom-2">
        <span id="ContentPlaceHolder1_lblAdResult" />
        <div id="ContentPlaceHolder1_mainrow" className="card">
          <div className="card-body">
            <div className="d-flex flex-wrap flex-xl-nowrap text-nowrap align-items-center ml-auto"></div>
            <div
              id="ContentPlaceHolder1_topPageDiv"
              className="d-md-flex justify-content-between mb-4"
            >
              <p className="mb-2 mb-md-0">
                <span className="d-flex align-items-center">
                  <i
                    id="spinwheel"
                    className="fa fa-spin fa-spinner fa-1x fa-pulse mr-1"
                    style={{ display: "none" }}
                  />
                  More than &gt; {allTransactions.length} transactions found
                </span>
                <span className="d-block small">
                  (Showing the last 500k records)
                </span>
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
                      <strong className="font-weight-medium">20000</strong>
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
                      href="txs?ps=25&p=2"
                      aria-label="Next"
                    >
                      <span aria-hidden="True">
                        <i className="fa fa-chevron-right small" />
                      </span>{" "}
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="txs?ps=25&p=20000">
                      <span aria-hidden="True">Last</span>{" "}
                      <span className="sr-only">Last</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="table-responsive mb-2 mb-md-0" id="paywall_mask">
              <table className="table table-hover">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" width={20} />
                    <th scope="col" width={1}>
                      Txn Hash
                    </th>
                    <th scope="col" width={1}>
                      <div className="d-flex align-items-center">
                        <div className="mr-2">
                          Method{" "}
                          <i
                            className="fal fa-info-circle"
                            data-toggle="tooltip"
                            data-html="true"
                            data-boundary="viewport"
                            title=""
                            data-original-title="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."
                          />
                        </div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      width={1}
                      className="d-none d-sm-table-cell"
                    >
                      <div className="d-flex align-items-center">
                        <div className="mr-2">Block</div>
                      </div>
                    </th>
                    <th scope="col">
                      <div className="d-flex align-items-center">
                        <div className="mr-2">
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
                        </div>
                      </div>
                    </th>
                    <th scope="col">
                      <div className="d-flex align-items-center">
                        <div className="mr-2">From</div>
                      </div>
                    </th>
                    <th scope="col" width={30} />
                    <th scope="col">
                      <div className="d-flex align-items-center">
                        <div className="mr-2">To</div>
                      </div>
                    </th>
                    <th scope="col">Value</th>
                    <th scope="col">
                      <div className="d-flex align-items-center">
                        <div className="mr-2">
                          <a
                            href="javascript:;"
                            onclick="switchTxFeeGasPrice()"
                            className="switch-txn-fee-gas-price"
                            title=""
                            data-toggle-commonjsfee="tooltip"
                            data-original-title="(Gas Price * Gas Used by Txns) in Matic"
                          >
                            Txn Fee
                          </a>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allTransactions.map((tx) => (
                    <tr>
                      <td>
                        <a
                          role="button"
                          tabIndex={0}
                          type="button"
                          className="js-txnAdditional-1 btn btn-xs btn-icon btn-soft-secondary myFnExpandBox"
                        >
                          <i className="far fa-eye btn-icon__inner" />
                        </a>
                      </td>
                      <td>
                        <span className="hash-tag text-truncate">
                          <a
                            href="/tx/0xc1bfda963270a2feb1d80b05d6091150276726f6b8bdb6efc329af76bb10402a"
                            className="myFnExpandBox_searchVal"
                          >
                            {tx.hash}
                          </a>
                        </span>
                      </td>
                      <td>
                        <span
                          style={{ minWidth: 68 }}
                          className="u-label u-label--xs u-label--info rounded text-dark text-center"
                          data-toggle="tooltip"
                          data-boundary="viewport"
                          data-html="true"
                          title=""
                          data-original-title="Buy Matrix"
                        >
                          Buy Matrix
                        </span>
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <Link
                          href={{
                            pathname: "/blockdetails",
                            query: tx.blockNumber,
                          }}
                        >
                          {tx.blockNumber}
                        </Link>
                      </td>

                      <td style={{}} className="showAge ">
                        <span
                          rel="tooltip"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title=""
                          data-original-title="2023-03-17 7:46:18"
                        >
                          13 secs ago
                        </span>
                      </td>
                      <td>
                        <span
                          className="hash-tag text-truncate"
                          data-boundary="viewport"
                          data-html="true"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="0x3cb0bec621954048c121094727573fa337a82277"
                        >
                          <a href="/address/0x3cb0bec621954048c121094727573fa337a82277">
                            {tx.from}
                          </a>
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="btn btn-xs btn-icon btn-soft-success rounded-circle">
                          <i className="fas fa-long-arrow-alt-right btn-icon__inner" />
                        </span>
                      </td>
                      <td>
                        <span style={{ whiteSpace: "nowrap" }}>
                          <i
                            className="far fa-file-alt text-secondary"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Contract"
                          />{" "}
                          <span
                            className="hash-tag text-truncate"
                            data-boundary="viewport"
                            data-html="true"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="0x0b443aff9f62b91004b9bdfe8b96728cc42c4dff"
                          >
                            <a href="/address/0x0b443aff9f62b91004b9bdfe8b96728cc42c4dff">
                              {tx.to}
                            </a>
                          </span>
                        </span>
                      </td>
                      <td>0 FREC</td>
                      <td style={{}} className="showTxnFee">
                        <span className="small text-secondary">
                          0<b>.</b>00024928
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              id="signInPopUp"
              className="row justify-content-center align-items-center"
              style={{ display: "none" }}
            >
              <div className="col d-none d-lg-block">
                <img
                  className="img-fluid mx-4"
                  src="/images/svg/bg/bg1-left-side.svg?v=20.4.3.0"
                  alt=""
                />
              </div>
              <div className="col-10 col-sm-8 col-lg-7 col-xl-5">
                <div className="text-center py-5 my-5-alt">
                  <h4 className="font-weight-bold">
                    Sign In for Continued Access
                  </h4>
                  <p className="h5 text-secondary mb-4">
                    No worries, it's absolutely <strong>free</strong> and takes
                    a minute!
                    <br className="-none d-md-inline-block" />
                    Register a{" "}
                    <a className="text-primary" href="/register">
                      Free Account
                    </a>{" "}
                    today.
                  </p>
                  <div className="mb-3">
                    <a
                      className="btn btn-primary transition-3d-hover text-nowrap text-uppercase px-4 py-2"
                      href="/login"
                    >
                      Sign In
                    </a>
                  </div>
                </div>
              </div>
              <div className="col d-none d-lg-block">
                <img
                  className="img-fluid mx-4"
                  src="/images/svg/bg/bg1-right-side.svg?v=20.4.3.0"
                  alt=""
                />
              </div>
            </div>
            <div id="ContentPlaceHolder1_pageRecords">
              <form method="post" action="./txs" id="ctl00">
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
                    defaultValue="YqyRXiVAks9Vnx0MCp75dQhqHt93xURwXtS3hXnaDAqLhQ3Oj8lDKOWNJP74H7+thXeO4PtZ1I7Td/wi7E28eicdgBio/P0FOxcz+TP5Duc="
                  />
                </div>
                <div className="aspNetHidden">
                  <input
                    type="hidden"
                    name="__VIEWSTATEGENERATOR"
                    id="__VIEWSTATEGENERATOR"
                    defaultValue="FCB51872"
                  />
                  <input
                    type="hidden"
                    name="__EVENTVALIDATION"
                    id="__EVENTVALIDATION"
                    defaultValue="2PhfFLi1QxP+0sIaNnQQ9TL9fiXAfL5l1eAFv32ZZ+RqpaVLk23EnBBzGmEBj09BkPwcSZ0138u3CX7htfDYF+rsg3Vus9LjmAixeeK3hYq/Le+B21/0NmIH+mZjDzOoN49EnzUgxtPSSaZLmRm1fvJTGfByIXYzpxkM5/QLtfw8FXQpJNa5IDZOorpP2KoJN4zEH+BX9nFEOSl+w+wd8g=="
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
                        of <strong className="font-weight-medium">20000</strong>
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
                        href="txs?ps=25&p=2"
                        aria-label="Next"
                      >
                        <span aria-hidden="True">
                          <i className="fa fa-chevron-right small" />
                        </span>{" "}
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="txs?ps=25&p=20000">
                        <span aria-hidden="True">Last</span>{" "}
                        <span className="sr-only">Last</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3 mb-4">
              <div className="d-flex align-items-center text-secondary" />
              <div className="small text-muted"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

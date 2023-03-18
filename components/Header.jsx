import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    // <Navbar expand="lg" variant="light" bg="light">
    //   <Container>
    //     <Navbar.Brand href="#">Frequency</Navbar.Brand>
    //   </Container>
    // </Navbar>
    <header id="header" className="u-header">
      <div className="u-header__section py-1">
        <div id="logoAndNav" className="container">
          <nav className="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space hs-menu-initialized hs-menu-horizontal">
            <div className="w-lg-auto">
              <a
                className="navbar-brand  pt-md-0"
                href="/"
                target="_parent"
                aria-label="PolygonScan"
              >
                <img
                  height={45}
                  id="logo-header"
                  width={100}
                  src="/frec_green.png"
                  alt="Frequency Logo"
                />
                <sup className="small">
                  <span className="badge badge-danger badge-pill">
                    Frequency
                  </span>
                </sup>
              </a>
            </div>
            <div>
              <span className="u-label u-label--price rounded-sm d-inline-block d-md-none d-sm-down-none mr-2"></span>
              <button
                type="button"
                className="navbar-toggler btn u-hamburger"
                aria-label="Toggle navigation"
                aria-expanded="false"
                aria-controls="navBar"
                data-toggle="collapse"
                data-target="#navBar"
              >
                <span id="hamburgerTrigger" className="u-hamburger__box">
                  <span className="u-hamburger__inner" />
                </span>
              </button>
            </div>
            <div className="d-flex flex-column w-100">
              <div
                id="navBar"
                className="collapse navbar-collapse u-header__navbar-collapse order-md-2"
              >
                <ul className="navbar-nav u-header__navbar-nav px-2 px-md-0">
                  <li
                    id="LI_default"
                    className="nav-item u-header__nav-item active"
                    data-event="hover"
                    data-animation-in="slideInUp"
                    data-animation-out="fadeOut"
                  >
                    <a
                      className="nav-link u-header__nav-link"
                      href="/"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-labelledby="pagesSubMenu"
                    >
                      Home
                    </a>
                  </li>
                  {/* <li
                    id="LI_blockchain"
                    className="nav-item hs-has-sub-menu u-header__nav-item"
                    data-event="hover"
                    data-animation-in="slideInUp"
                    data-animation-out="fadeOut"
                  >
                    <a
                      id="blockchainMegaMenu"
                      className="nav-link u-header__nav-link u-header__nav-link-toggle"
                      href="javascript:;"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-labelledby="pagesSubMenu"
                    >
                      Blockchain
                    </a>
                    <ul
                      id="blockchainSubMenu"
                      className="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer animated fadeOut"
                      aria-labelledby="blockchainMegaMenu"
                      style={{ minWidth: 230, display: "none" }}
                    >
                      <li id="LI12">
                        <a
                          href="/txs"
                          className="nav-link u-header__sub-menu-nav-link"
                        >
                          Transactions
                        </a>
                      </li>
                      <li id="LI16">
                        <a
                          href="/txsPending"
                          className="nav-link u-header__sub-menu-nav-link"
                        >
                          Pending Transactions
                        </a>
                      </li>
                      <li id="LI14">
                        <a
                          href="/txsInternal"
                          className="nav-link u-header__sub-menu-nav-link"
                        >
                          Contract Internal Transactions
                        </a>
                      </li>
                      <li id="LI1">
                        <a
                          href="/txnbridge"
                          className="nav-link u-header__sub-menu-nav-link"
                        >
                          Plasma Deposit Transactions
                        </a>
                      </li>
                      <li className="dropdown-divider" />
                      <li id="LI_blocks">
                        <a
                          id="navBlocks"
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/blocks"
                          aria-haspopup="true"
                          aria-expanded="false"
                          aria-controls="navSubBlocks"
                        >
                          View Blocks
                        </a>
                      </li>
                      <li id="LI_blocks2">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/blocks_forked"
                        >
                          Forked Blocks (Reorgs)
                        </a>
                      </li>
                      <li id="LI8" className="d-none">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/uncles"
                        >
                          View Uncles
                        </a>
                      </li>
                      <li className="divider" />
                      <li className="dropdown-divider" />
                      <li id="LI_accountall">
                        <a
                          href="/accounts"
                          className="nav-link u-header__sub-menu-nav-link"
                        >
                          Top Accounts
                        </a>
                      </li>
                      <li id="LI_contract_verified">
                        <a
                          href="/contractsVerified"
                          className="nav-link u-header__sub-menu-nav-link"
                        >
                          Verified Contracts
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="LI_Tokens"
                    className="nav-item hs-has-sub-menu u-header__nav-item"
                    data-event="hover"
                    data-animation-in="slideInUp"
                    data-animation-out="fadeOut"
                  >
                    <a
                      id="testTokensMegaMenu"
                      className="nav-link u-header__nav-link u-header__nav-link-toggle"
                      href="javascript:;"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-labelledby="testTokensSubMenu"
                    >
                      Tokens
                    </a>
                    <ul
                      id="testTokensSubMenu"
                      className="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer animated fadeOut"
                      aria-labelledby="testTokensMegaMenu"
                      style={{ minWidth: 230, display: "none" }}
                    >
                      <li id="LI18">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/tokens"
                        >
                          ERC-20 Tokens By MarketCap
                        </a>
                      </li>
                      <li id="LI3">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/tokentxns"
                        >
                          View ERC-20 Transfers
                        </a>
                      </li>
                      <li className="dropdown-divider" />
                      <li id="LI42">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/tokens-nft"
                        >
                          ERC721 Top Tokens
                        </a>
                      </li>
                      <li id="LI40">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/tokentxns-nft"
                        >
                          View ERC721 Transfers
                        </a>
                      </li>
                      <li className="dropdown-divider" />
                      <li id="LI30">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/tokens-nft1155"
                        >
                          ERC-1155 Top Tokens
                        </a>
                      </li>
                      <li id="LI33">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/tokentxns-nft1155"
                        >
                          View ERC-1155 Transfers <sup />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="LI_Misc_test"
                    className="nav-item hs-has-sub-menu u-header__nav-item my-md-n1"
                    data-event="hover"
                    data-animation-in="slideInUp"
                    data-animation-out="fadeOut"
                  >
                    <a
                      id="testMiscMegaMenu"
                      className="nav-link u-header__nav-link u-header__nav-link-toggle"
                      href="javascript:;"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-labelledby="testMiscSubMenu"
                    >
                      Misc
                    </a>
                    <ul
                      id="testMiscSubMenu"
                      className="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer animated fadeOut"
                      aria-labelledby="testMiscMegaMenu"
                      style={{ minWidth: 200, display: "none" }}
                    >
                      <li id="LI17">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="https://docs.polygonscan.com/v/mumbai-polygonscan/"
                          target="_blank"
                        >
                          API Documentation
                        </a>
                      </li>
                      <li id="LI19">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/verifyContract"
                        >
                          Verify Contract
                        </a>
                      </li>
                      <li id="LI21">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/opcode-tool"
                        >
                          Byte to Opcode
                        </a>
                      </li>
                      <li id="LI22">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/pushTx"
                        >
                          Broadcast TXN
                        </a>
                      </li>
                      <li id="LI24">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="/vyper"
                        >
                          Vyper Online Compiler
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  <li className="u-header__nav-separator ml-3" />
                  <li
                    className="nav-item hs-has-sub-menu u-header__nav-item my-md-n1"
                    data-event="hover"
                    data-animation-in="slideInUp"
                    data-animation-out="fadeOut"
                  >
                    <a
                      id="testnetexplorersWithDropdown"
                      className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-toggle--mobile pr-0"
                      href="javascript:;"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-labelledby="testnetexplorersDropdown"
                    >
                      <span className="btn btn-xss btn-soft-primary cursor-pointer d-none d-md-inline-block">
                        Mainnet
                      </span>
                      <span className="d-inline-block d-md-none">
                        Explorers
                      </span>
                    </a>
                    <ul
                      id="testnetexplorersDropdown"
                      className="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer dropdown-menu-md-right animated fadeOut"
                      aria-labelledby="testnetexplorersWithDropdown"
                      style={{ minWidth: 170, display: "none" }}
                    >
                      <li id="LI_testnetMain">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          href="https://polygonscan.com"
                        >
                          Frequency Mainnet
                        </a>
                      </li>
                      <li id="LI_testnetTestnet">
                        <a
                          className="nav-link u-header__sub-menu-nav-link"
                          // href="https://mumbai.polygonscan.com"
                        >
                          Frequency Mennet
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function Footer() {
  return (
    <>
      <footer
        className="bg-dark py-4"
        style={{
          backgroundImage:
            "url(/images/svg/components/abstract-shapes-20.svg?v=3)",
        }}
      >
        <div className="container">
          <div className="row justify-content-sm-between align-items-center">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="d-flex align-items-center">
                <img
                  width={100}
                  height={65}
                  src="tgps_white.png"
                  alt="Polygon Logo"
                />
                <span className="h5 text-white mb-0 ml-3">
                  Powered by Frequency Chain
                </span>
              </div>
            </div>
            <div className="col-sm-6 align-self-bottom">
              <div className="d-flex justify-content-sm-end align-items-center mb-4">
                <span>
                  <button
                    disabled="true"
                    type="button"
                    className="btn btn-xss btn-soft-light text-nowrap d-flex align-items-center mr-2"
                    onclick="addNetwork('web3');"
                  >
                    <img
                      className="mr-1"
                      width={65}
                      height={65}
                      src="frec_green.png"
                      alt="Metamask"
                    />
                    Add Frequency Network
                  </button>
                </span>
                <a
                  style={{ color: "#8247e5" }}
                  disabled="true"
                  className="btn btn-xss btn-soft-light mr-2"
                  // href="/settings"
                >
                  <i className="fa fa-cogs mr-1" />
                  Preferences
                </a>
                <button
                  disabled="true"
                  id="darkModaBtn"
                  type="button"
                  data-toggle="tooltip"
                  data-title="Day/Night Mode"
                  className="btn btn-sm btn-icon btn-soft-light"
                  data-original-title=""
                  title=""
                >
                  <i id="darkModaBtnIcon" className="fa fa-moon" />
                </button>
              </div>
            </div>
          </div>
          <hr className="opacity-md" />
          <div className="row justify-content-between align-items-center font-size-1">
            <div className="col-md-6 mb-2 mb-md-0 d-flex">
              <p className="mb-0 text-white">
                FrequencyScan © 2023 (FREC-MAINNET)
                <span className="mx-1">|</span> ⛏ Built by the same team behind{" "}
                <text
                  className="text-primary"
                  href="https://etherscan.io/"
                  target="_blank"
                >
                  <b>Thai Green</b>
                </text>{" "}
                <span className="mx-1">|</span>{" "}
                <text
                  className="text-white-70"
                  href="/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f"
                >
                  Donate
                </text>{" "}
                <i className="fas fa-heart text-danger" />
              </p>
            </div>
            <div className="col-md-6 text-md-right">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <text
                    style={{ color: "#8247e5" }}
                    className="unordered-list-text"
                    rel="nofollow noopener"
                    target="_blank"
                    href="/terms"
                  >
                    Terms of Service
                  </text>
                </li>
                <li className="list-inline-item">
                  <text
                    style={{ color: "#8247e5" }}
                    className="unordered-list-text"
                    rel="nofollow noopener"
                    target="_blank"
                    href="https://polygonscan.freshstatus.io/"
                  >
                    Network Status
                  </text>
                </li>
                <li className="list-inline-item">
                  <text
                    className="btn btn-sm btn-icon btn-soft-light btn-pill"
                    href="/contactus"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Contact Us"
                  >
                    <i className="far fa-envelope btn-icon__inner" />
                  </text>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

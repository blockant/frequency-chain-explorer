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
                <a className="btn btn-xss btn-soft-light mr-2" href="/settings">
                  <i className="fa fa-cogs mr-1" />
                  Preferences
                </a>
                <button
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
                FrequencyScan © 2023 (FREq-TESTNET)
                <span className="mx-1">|</span> ⛏ Built by the same team behind{" "}
                <a
                  className="text-primary"
                  href="https://etherscan.io/"
                  target="_blank"
                >
                  <b>Etherscan</b>
                </a>{" "}
                <span className="mx-1">|</span>{" "}
                <a
                  className="text-white-70"
                  href="/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f"
                >
                  Donate
                </a>{" "}
                <i className="fas fa-heart text-danger" />
              </p>
            </div>
            <div className="col-md-6 text-md-right">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a
                    className="unordered-list-text"
                    rel="nofollow noopener"
                    target="_blank"
                    href="/terms"
                  >
                    Terms of Service
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="unordered-list-text"
                    rel="nofollow noopener"
                    target="_blank"
                    href="https://polygonscan.freshstatus.io/"
                  >
                    Network Status
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-sm btn-icon btn-soft-light btn-pill"
                    href="/contactus"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Contact Us"
                  >
                    <i className="far fa-envelope btn-icon__inner" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div
        id="divcookie"
        className="fixed-bottom w-md-75 w-xl-60 mx-md-auto mx-3"
        style={{ display: "block" }}
      >
        <div className="alert alert-light border shadow p-3" role="alert">
          <div className="d-md-flex justify-content-center align-items-center">
            <span>
              <p className="text-dark mr-3 mb-2 mb-md-0">
                <i className="far fa-cookie-bite text-secondary mr-1" />
                This website{" "}
                <a href="/terms#cookiestatement" target="_blank">
                  uses cookies to improve your experience
                </a>
                . By continuing to use this website, you agree to its{" "}
                <a href="/terms" target="_blank">
                  Terms
                </a>{" "}
                and <a href="/privacyPolicy">Privacy Policy</a>.
              </p>
            </span>
            <div>
              <button
                id="btnCookie"
                className="btn btn-sm btn-primary text-nowrap py-1"
                data-dismiss="alert"
                aria-label="Close"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      </div>
      <a
        className="js-go-to u-go-to animated"
        href="#"
        data-position='{"bottom": 20, "right": 15 }'
        data-type="fixed"
        data-offset-top={400}
        data-compensation="#header"
        data-show-effect="slideInUp"
        data-hide-effect="slideOutDown"
        style={{
          display: "inline-block",
          position: "fixed",
          opacity: 0,
          bottom: 20,
          right: 15,
        }}
      >
        <span className="fa fa-arrow-up u-go-to__inner" />
      </a>
      <ul
        id="ui-id-1"
        tabIndex={0}
        className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
        style={{ display: "none" }}
      />
      <div
        role="status"
        aria-live="assertive"
        aria-relevant="additions"
        className="ui-helper-hidden-accessible"
      />
      <grammarly-desktop-integration data-grammarly-shadow-root="true" />
    </>
  );
}

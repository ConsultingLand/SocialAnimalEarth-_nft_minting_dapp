import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

//Styling file
import "./Mint.css";

//Images
import polygonLogo from "../images/polygon-logo.svg";
import blocked from "../images/block.svg";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function Mint() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <section className="mint-section">
      {/* <div className="section-title">Connect</div> */}
      <div
      // style={{ padding: 50, backgroundColor: "#2A6184" }}
      // image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
      >
        <div>
          <p className="amount">
            {data.totalSupply} / {CONFIG.MAX_SUPPLY}
          </p>
          <div className="contract">
            <div className="contract-title">Contract Address</div>
            <div className="contract-link">
              <a target={"_blank"} href={CONFIG.SCAN_LINK}>
                ({truncate(CONFIG.CONTRACT_ADDRESS, 15)})
              </a>
            </div>
          </div>
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <p>The sale has ended.</p>
              <p>You can still find {CONFIG.NFT_NAME} on</p>p
              <a target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                {CONFIG.MARKETPLACE}
              </a>
            </>
          ) : (
            <>
              <div className="pricing">
                <span className="item-amount">1</span>
                <span className="symbol">{CONFIG.SYMBOL}</span> ={" "}
                <span className="cost">{CONFIG.DISPLAY_COST}</span>{" "}
                <span className="network-symbol">{CONFIG.NETWORK.SYMBOL}</span>
                <p className="pricing-note">(Excluding gas fees)</p>
              </div>

              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <div className="connection">
                  <p className="connection-title">
                    Connect to the{" "}
                    <span className="netowrk-name">{CONFIG.NETWORK.NAME}</span>{" "}
                    Network
                  </p>
                  <button
                    className="connect-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    CONNECT
                  </button>
                  {blockchain.errorMsg !== "" ? (
                    <div className="error">
                      <p className="error-message">
                        <i class="fas fa-exclamation-triangle"></i>{" "}
                        {blockchain.errorMsg}
                      </p>
                    </div>
                  ) : null}
                </div>
              ) : (
                <>
                  <div className="feedback">{feedback}</div>
                  <div className="buttons">
                    <button
                      className="decrease-btn"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      -
                    </button>
                    <p className="mint-amount">{mintAmount}</p>
                    <button
                      className="increase-btn"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button
                      className="buy-btn"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      {claimingNft ? "BUSY" : "BUY"}
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="brief-informations">
          <div className="information">
            <div className="info-logo">
              <img src={polygonLogo} />
            </div>
            <div className="info-t">Polygon</div>
            <div className="info-p">
              Please make sure you are connected to the right network (
              {CONFIG.NETWORK.NAME} Mainnet) and the correct address.
            </div>
          </div>
          <div className="information">
            <div className="info-logo">
              <img src={blocked} />
            </div>
            <div className="info-t">Caution</div>
            <div className="info-p">
              {" "}
              Please note that once you make the purchase, you cannot undo this
              action.
            </div>
          </div>
          <div className="information">
            <div className="info-logo">
              <i class="fas fa-gas-pump"></i>
            </div>
            <div className="info-t">Gas Limit</div>
            <div className="info-p">
              We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract
              to successfully mint your NFT. We recommend that you don't lower
              the gas limit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mint;

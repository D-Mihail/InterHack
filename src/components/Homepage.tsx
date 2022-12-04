import axios from "axios";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { InputDataType, pnlDataa, pnlDataType } from "../types.ts/DataTypes";

type Props = {
  setInputData: Dispatch<SetStateAction<InputDataType[]>>;
};

export const Homepage = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [dateFrom, setDateFrom] = useState<string>("2022-11-04");
  const [dateTo, setDateTo] = useState<string>("2022-12-04");
  const [pnlData, setPnlData] = useState<pnlDataType>(pnlDataa);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setUserInput(e.target.value);
  };
  //   let today = new Date().toLocaleDateString();

  //   console.log(today);

    useEffect(() => {
      axios(`http://localhost:3070/pnl/${userInput}/${dateFrom}/${dateTo}`)
        .then((res) => {setPnlData(res.data); setErrorMsg("")})
        .catch((error) => {
          setUserInput("");
          setErrorMsg("The Crypto Wallet is invalid. Try a different URL.");
        })
        .finally(() => console.log("it's done"));
      console.log(pnlData);
    }, [userInput, dateFrom, dateTo]);

  return (
    <div className="col-10 mt-3">
      <p className="h4">Enter wallet address:</p>

      <div className="row">
        <div className="col-12 f-control col-lg-6 pt-4">
          <label htmlFor="user" className="font-weight-bolder">
            Enter Wallet address
          </label>
          <input
            className="form-control-sm"
            type="text"
            name="user"
            id="user"
            //   value={userInput}
            onBlur={handleOnBlur}
            placeholder="Paste URL here..."
          />
        </div>
        <div className="col-12 f-control col-lg-6 pt-4">
          <div className="row">
            <div className="col-6">
              <label className="mr-3 font-weight-bolder" htmlFor="fDateFrom">
                Date From:
              </label>
              <input
                name="fDateFrom"
                id="fDateFrom"
                type="date"
                className="form-control-sm"
                value={dateFrom}
                min="2022-02-20"
                max="2032-02-20"
                onChange={(e) => {
                  setDateFrom(e.target.value);
                }}
              />
            </div>
            <div className="col-6">
              <label className="mr-3 font-weight-bolder" htmlFor="fDateTo`">
                Date To:
              </label>
              <input
                name="fDateTo"
                id="fDateTo"
                type="date"
                className="form-control-sm"
                value={dateTo}
                min="2022-02-20"
                max="2032-02-20"
                onChange={(e) => {
                  setDateTo(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        {userInput && (
          <>
            <span className="border rounded p-2">
              PnL rate is {pnlData.pnl}%
            </span>
            <div className="row text-left">
              <div className="col-6 mt-5">
                <p className="text-center font-weight-bolder">On {dateFrom}</p>
                <p>
                  Networth:
                  {" " +
                    pnlData.networthDate1.networth.toString().split(".")[0]}
                </p>
                <div className="d-flex align-items-center">
                  Account tokens:
                  <div className="px-2">
                    {pnlData.networthDate1.tokensDisplayed.map((el) => (
                      <p className="m-0">{el.toString().split(".")[0]}</p>
                    ))}
                  </div>
                </div>
                <p>
                  Ehther Holdings:
                  {" " +
                    pnlData.networthDate1.ethHoldingsUsd
                      .toString()
                      .split(".")[0]}
                </p>
                <p>
                  All token Values:
                  {" " +
                    pnlData.networthDate1.allTokenUsdValue
                      .toString()
                      .split(".")[0]}
                </p>
              </div>
              <div className="col-6 mt-5">
                <p className="text-center font-weight-bolder">On {dateTo}</p>

                <p>
                  {" "}
                  Networth:
                  {" " +
                    pnlData.networthDate2.networth.toString().split(".")[0]}
                </p>
                <div className="d-flex align-items-center">
                  Account tokens:
                  <div className="px-2">
                    {pnlData.networthDate2.tokensDisplayed.map((el) => (
                      <p className="m-0">{el.toString().split(".")[0]}</p>
                    ))}
                  </div>
                </div>
                <p>
                  Ehther Holdings:
                  {" " +
                    pnlData.networthDate2.ethHoldingsUsd
                      .toString()
                      .split(".")[0]}
                </p>
                <p>
                  All token Values:
                  {
                    +pnlData.networthDate2.allTokenUsdValue
                      .toString()
                      .split(".")[0]
                  }
                </p>
              </div>
            </div>
          </>
        )}
        {!errorMsg && <p>{errorMsg}</p>}
      </div>
    </div>
  );
};

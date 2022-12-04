import React, { useEffect, useState } from "react";

export const Telescope = () => {
  const [firstUser, setFirstUser] = useState<string>("");
  const [secondUser, setSecondUser] = useState<string>("");
  const [firstDateFrom, setFirstDateFrom] = useState<string>("2022-11-04");
  const [firstDateTo, setFirstDateTo] = useState<string>("2022-12-04");
  const [secondDateFrom, setSecondDateFrom] = useState<string>("2022-11-04");
  const [secondDateTo, setSecondDateTo] = useState<string>("2022-12-04");
  const [displayCheck, setDisplayCheck] = useState<boolean>(false);

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    e.target.name === "user1"
      ? setFirstUser(e.target.value)
      : setSecondUser(e.target.value);
  };

  let goodToGo: boolean = false;

  useEffect(() => {
    firstUser &&
    secondUser &&
    firstDateFrom &&
    firstDateTo &&
    secondDateFrom &&
    secondDateTo
      ? setDisplayCheck(true)
      : setDisplayCheck(false);
  }, [
    firstUser,
    secondUser,
    firstDateFrom,
    firstDateTo,
    secondDateFrom,
    secondDateTo,
  ]);

  useEffect(() => {
    console.log(secondUser, firstDateFrom);
  }, [goodToGo]);

  return (
    <div className="col-10 mt-3">
      <p className="h4">Enter wallet address:</p>

      <div className="row">
        <div className="col-12 f-control col-lg-6 pt-4">
          <label htmlFor="user1" className="font-weight-bolder">
            Enter Wallet address
          </label>
          <input
            className="form-control-sm"
            type="text"
            name="user1"
            id="user1"
            //   value={firstUser}
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
                value={firstDateFrom}
                min="2022-02-20"
                max="2032-02-20"
                onChange={(e) => {
                  setFirstDateFrom(e.target.value);
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
                value={firstDateTo}
                min="2022-02-20"
                max="2032-02-20"
                onChange={(e) => {
                  setFirstDateTo(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 f-control col-lg-6 pt-4">
          <label htmlFor="user2" className="font-weight-bolder">
            Enter Wallet address
          </label>
          <input
            className="form-control-sm"
            type="text"
            name="user2"
            id="user2"
            //   value={firstUser}
            onBlur={handleOnBlur}
            placeholder="Paste URL here..."
          />
        </div>
        <div className="col-12 f-control col-lg-6 pt-4">
          <div className="row">
            <div className="col-6">
              <label className="mr-3 font-weight-bolder" htmlFor="sDateFrom">
                Date From:
              </label>
              <input
                name="sDateFrom"
                id="sDateFrom"
                type="date"
                className="form-control-sm"
                value={secondDateFrom}
                min="2022-02-20"
                max="2032-02-20"
                onChange={(e) => {
                  setSecondDateFrom(e.target.value);
                }}
              />
            </div>
            <div className="col-6">
              <label className="mr-3 font-weight-bolder" htmlFor="sDateTo">
                Date To:
              </label>
              <input
                name="sDateTo"
                id="sDateTo"
                type="date"
                className="form-control-sm"
                value={secondDateTo}
                min="2022-02-20"
                max="2032-02-20"
                onChange={(e) => {
                  setSecondDateTo(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {displayCheck && (
        <div className="text-center mt-5">
          <span className="border rounded p-2">
            Telescope output will come back here
          </span>
        </div>
      )}
    </div>
  );
};

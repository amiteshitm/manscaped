"use client";

import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import TableData from "./components/TableData";
import Image from "next/image";
const URL = process.env.API_URL;
export default function Home() {
  const [userData, setUserData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  let showPage = 15;
  const fetchUser = async () => {
    setLoading(true);
    let data = await fetch("http://localhost:3000/api/user");
    data = await data.json();
    setUserData(JSON.parse(data));
    setLoading(false);
  };

  const selectPageHandler = (sPage) => {
    if (
      sPage >= 1 &&
      sPage <= Math.ceil(updateData.length / showPage) &&
      sPage !== page
    )
      setPage(sPage);
  };

  let updateData = userData.map((el) => {
    let str = el?.jsonPayload?.fields?.message?.stringValue;

    let first = str?.indexOf("for ");

    let last = str?.length;

    let result = str?.substring(first, last);

    return {
      ...el,
      stringValue: result.slice(3),
    };
  });

  return (
    <div>
      <div className="button-center">
        <button className="button" onClick={fetchUser}>
          Fetch Compromised Data
        </button>
      </div>
      {Loading ? (
        <div className="outer-circle">
          <div className="inner-circle">
            <p className="img-center">
              <Image
                src="https://media.tenor.com/FspCvtI5W54AAAAC/qoobee-wink-wink.gif"
                width={130}
                height={130}
                alt="Loading"
              />
            </p>
          </div>
        </div>
      ) : userData.length === 0 ? (
        <h3 className="static-data">
          Please click on above button to view the data
        </h3>
      ) : (
        <>
          <TableData updateData={updateData} page={page} showPage={showPage} />
          <Pagination
            selectPageHandler={selectPageHandler}
            page={page}
            showPage={showPage}
            updateData={updateData}
          />
        </>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getMusicSearchCall } from "../store/actions/musicAction";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import ModalSearch from "../components/ModalSearch/ModalSearch";
import Loading from "../components/Loading/Loading";

export default function Results() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [limit, setLimit] = useState(5);
  const [searchModal, setSearchModal] = useState(false);
  const [isLoadingLoad, setIsLoadingLoad] = useState(false);

  const { data, isLoading } = useSelector((state) => state.music);

  const search = searchParams.get("search");

  useEffect(() => {
    const params = {
      search,
      limit,
    };

    dispatch(getMusicSearchCall(params));
  }, [search, limit]);
  const loadMore = () => {
    setIsLoadingLoad(true);
    setLimit((prevLimit) => prevLimit + 5);
  };

  const onClickSearch = () => {
    setSearchModal(true);
  };

  return (
    <>
      <div className="bg-[#f8fafc] pb-20 h-screen overflow-y-scroll">
        {searchModal ? (
          <>
            <ModalSearch onCloseModal={() => setSearchModal(false)} />
          </>
        ) : (
          <></>
        )}
        <div className="overflow-y-scroll">
          <Header onClickSearch={onClickSearch} />
          <div className="flex items-center justify-center mt-5">
            {isLoading ? <Loading /> : <></>}
          </div>
          <div className="mt-10">
            <div className="flex justify-center items-center gap-3">
              <div>Search result for :</div>
              <div className="text-primary font-semibold text-lg">{search}</div>
            </div>
            <div className="px-4 mt-10 gap-5 flex flex-col">
              {data.map((item, key) => (
                <Card data={item} key={key} />
              ))}
            </div>
            <div className="flex items-center justify-center mt-5">
              {isLoading && isLoadingLoad ? <Loading /> : <></>}
            </div>
            <div className="flex items-center justify-center mt-10 font-semibold">
              <Button
                label={"Load More"}
                bgColor={"#e2e8f0"}
                onClick={loadMore}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

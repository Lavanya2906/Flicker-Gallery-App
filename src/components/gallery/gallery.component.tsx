import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRecentPhotos, searchImageByText } from "../../slice/gallerySlice";
import { RootState } from "../../slice/store";
import { GalleryList } from "../gallery-list/gallery-list.component";
import "./gallery.scss";

const Gallery = (): React.ReactElement => {
  const dispatch = useDispatch();
  const showLoader = useSelector(
    (state: RootState) => state.gallery.showLoader
  );
  const [searchText, setSearchText] = useState<string>("");
  const handleSearchtext = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
  };
  const handleSearch = () => {
    if (searchText) dispatch(searchImageByText(searchText));
  };

  useEffect(() => {
    dispatch(getRecentPhotos());
  }, []);

  return (
    <div className="c-gallery">
      <div className="c-gallery-search">
        <input
          type="text"
          placeholder="Search Flicker for photos..."
          className="c-search-input"
          onChange={handleSearchtext}
        />
        <button className="c-search-button" onClick={() => handleSearch()}>
          Search
        </button>
      </div>
      {/* loader appears while fetching results from api */}
      {showLoader ? (
        <div className="c-spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        <GalleryList />
      )}
    </div>
  );
};

export default Gallery;

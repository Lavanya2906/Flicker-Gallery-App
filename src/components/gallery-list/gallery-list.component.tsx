import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../slice/store";
import { IImage } from "../../slice/types";
import { getImageUrl } from "../../utils";
import "./gallery-list.scss";

export const GalleryList = () => {
  const images = useSelector((state: RootState) => state.gallery.images);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<any>({
    url: "",
    height: "",
    width: "",
    title: "",
  });

  const handleImageClick = (image: IImage) => {
    const { width_l, height_l, url_l } = image;
    const imageObj = {
      url: url_l,
      height: height_l,
      width: width_l,
    };
    setActiveImage(imageObj);
    setModalOpen(true);
  };

  return (
    <div className="c-gallery-list">
      {images.map((image: IImage) => (
        <div key={image.id}>
          <img
            alt="flicker photo"
            src={getImageUrl(image.farm, image.server, image.id, image.secret)}
            className="c-gallery-list-item"
            onClick={() => handleImageClick(image)}
          ></img>
        </div>
      ))}
      <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="c-gallery-modal mb-3">
            <div className="text-center">
              <h4>Dimensions:</h4>
              <p className="m-0">Height: {activeImage.height}</p>
              <p>Width: {activeImage.width}</p>
            </div>
            <img src={activeImage.url}></img>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

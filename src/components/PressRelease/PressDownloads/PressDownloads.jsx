import React from "react";

import "./PressDownloads.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import { GET_IMAGE_URL, GET_FILE_URL } from "../../../utils/apiCalls";

const PressDownloads = ({ acf }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImageUrls = async () => {
      if (acf && acf.downloads_list) {
        try {
          const promises = acf.downloads_list.map(async (item) => {
            const response = await GET_IMAGE_URL(item.image.id);
            return response.data;
          });

          const resolvedImages = await Promise.all(promises);
          setImages(resolvedImages);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getImageUrls();
  }, [acf]);

  const downloadFile = (file) => {
    console.log(file);
    const aTag = document.createElement("a");
    const fileName = file.filename;

    aTag.href = file.url;
    aTag.setAttribute("download", fileName);
    console.log(aTag);
    console.log(fileName);

    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <section className="press-downloads">
      <div className="press-downloads__container container">
        {acf && <p className="press-downloads__title">{acf.downloads_title}</p>}
        <div className="press-downloads__list">
          {acf &&
            images.length &&
            images.map((item, index) => {
              return (
                <div className="press-downloads__item" key={index}>
                  <div className="press-downloads__item-image-container">
                    <img
                      src={item.source_url}
                      alt="Download Image"
                      className="press-downloads__item-image"
                    />
                  </div>
                  <div className="press-downloads__item-title">
                    {acf.downloads_list[index].title}
                  </div>
                  {acf.downloads_list[index].button_file && (
                    // <button
                    //   onClick={() => {
                    //     downloadFile(acf.downloads_list[index].button_file);
                    //   }}
                    //   className="press-downloads__item-button"
                    // >
                    //   {acf.downloads_list[index].button}
                    // </button>
                    // <a
                    //   href={acf.downloads_list[index].button_file.url}
                    //   download
                    //   target="_blank"
                    //   rel="noreferrer"
                    //   className="press-downloads__item-button"
                    // >
                    //   {acf.downloads_list[index].button}
                    // </a>
                    <Link
                      to={acf.downloads_list[index].button_file.url}
                      download
                      target="_blank"
                      rel="noreferrer"
                      className="press-downloads__item-button"
                    >
                      {acf.downloads_list[index].button}
                    </Link>
                  )}
                  {!acf.downloads_list[index].button_file && (
                    <div className="press-downloads__item-button--no-file">
                      {acf.downloads_list[index].button}
                      <div className="press-downloads__item-button--no-file-overlay"></div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PressDownloads;

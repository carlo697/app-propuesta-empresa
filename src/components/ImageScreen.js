import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "store/actions/companyActions";
import Buttons from "./Buttons";

const ImageScreen = ({ options }) => {
  const dispatch = useDispatch();

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      maxFiles: 1,
      accept: "image/*",
    });

  // @ts-ignore
  const image = useSelector((state) => state.company.image);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      dispatch(setImage(URL.createObjectURL(acceptedFiles[0])));
    }

    return () => {};
  }, [acceptedFiles, dispatch]);

  return (
    <div className="screen">
      <div className="overlay">
        <div
          {...getRootProps({
            className: `dropzone rounded mx-5 mb-2 ${
              isDragActive ? "drag-active" : ""
            }`,
          })}
        >
          <input name="import" {...getInputProps()} />
          {acceptedFiles.length > 0 ? (
            <React.Fragment>
              {image && (
                <img className="company-img" src={image} alt="uploaded logo" />
              )}
            </React.Fragment>
          ) : (
            <span>¡Suba el logo de su empresa haciendo clic aqui!</span>
          )}
        </div>

        <Buttons
          options={options}
          disableForwardButton={acceptedFiles.length === 0}
        />
      </div>
    </div>
  );
};

export default ImageScreen;

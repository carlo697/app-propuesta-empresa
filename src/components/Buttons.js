import React from "react";

const Buttons = ({
  options,
  showForwardButton = true,
  showBackButton = true,
  disableForwardButton = false,
  disableBackButton = false,
}) => {
  const { index, nextScreen, lastScreen, screenCount } = options;

  return (
    <div className="buttons">
      {index > 0 && showBackButton ? (
        <button
          className="btn btn-link"
          onClick={lastScreen}
          disabled={disableBackButton}
        >
          Ir Atrás
        </button>
      ) : (
        <div></div>
      )}

      {index !== screenCount - 1 && showForwardButton ? (
        <button
          className="btn btn-outline"
          onClick={nextScreen}
          disabled={disableForwardButton}
        >
          Siguiente
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Buttons;

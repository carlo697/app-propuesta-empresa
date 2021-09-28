import React from "react";

const Buttons = ({
  options,
  showForwardButton = true,
  showBackButton = true,
  disableForwardButton = false,
  disableBackButton = false,
  backToFirstScreen = false,
  backwardSkip = 1,
  forwardSkip = 1,
}) => {
  const {
    index,
    nextScreen,
    lastScreen,
    firstScreen,
    screenCount,
    skipScreens,
  } = options;

  const handleGoBack = () => {
    if (backToFirstScreen) {
      firstScreen();
    } else {
      skipScreens(-backwardSkip);
    }
  };

  const handleGoNext = () => {
    skipScreens(forwardSkip);
  };

  return (
    <div className="buttons">
      {index > 0 && showBackButton ? (
        <button
          className="btn btn-link"
          onClick={handleGoBack}
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
          onClick={handleGoNext}
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

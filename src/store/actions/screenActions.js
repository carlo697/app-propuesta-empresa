export function nextScreen(screenName) {
  return {
    type: "NEXT_SCREEN",
    payload: screenName,
  };
}

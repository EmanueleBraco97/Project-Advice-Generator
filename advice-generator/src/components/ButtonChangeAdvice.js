import "./ButtonChangeAdvice.css";

const ButtonChangeAdvice = ({
  intervalId,
  setIntervalId,
  getData,
  disabled,
  handleDisabled = false,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    handleDisabled();
    getData();
    clearInterval(intervalId);

    let interval = setInterval(getData, 60000);
    setIntervalId(interval);
  };

  let buttonClass = "enabled";
  disabled ? (buttonClass = "disabled") : (buttonClass = "enabled");

  return (
    <div className="bottom-img">
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`button change-consiglio ${buttonClass}`}
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonChangeAdvice;

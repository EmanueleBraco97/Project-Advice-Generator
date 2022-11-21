const Loading = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <span style={{ color: "red", fontSize: "22px" }}>
          A Moment Please...
        </span>
      )}
    </>
  );
};

export default Loading;

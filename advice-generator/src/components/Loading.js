const Loading = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <span style={{ color: "red", fontSize: "18px" }}>
          A Moment Please...
        </span>
      )}
    </>
  );
};

export default Loading;

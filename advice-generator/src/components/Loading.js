const Loading = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <span
          style={{ color: "#1f2632", fontSize: "25px", fontWeight: "bold" }}
        >
          A Moment Please...
        </span>
      )}
    </>
  );
};

export default Loading;

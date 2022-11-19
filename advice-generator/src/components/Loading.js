const Loading = ({ isLoading }) => {
  return <>{isLoading && <span>A Moment Please...</span>}</>;
};

export default Loading;

const Line = ({ data }) => {
  return (
    <div className="line">
      <p>{`${data.symbol} ${data.title}`}</p>
      <span>Click to copy</span>
    </div>
  );
};

export default Line;

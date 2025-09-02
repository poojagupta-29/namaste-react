const ShimmerCard = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-image"></div>
        <div className="shimmer-content">
          <div className="shimmer-line title"></div>
          <div className="shimmer-line subtitle"></div>
          <div className="shimmer-line rating"></div>
          <div className="shimmer-line delivery"></div>
          <div className="shimmer-line location"></div>
        </div>
      </div>
    );
  };
  
export default ShimmerCard;
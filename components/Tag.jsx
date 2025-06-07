export default function Tag({ onhandleHomeClick }) {
  return (
    <div className="tag">
      <div className="luxury">
        <img
          src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
          alt=""
        />
        <div onClick={onhandleHomeClick}>
          <h3 style={{ color: "white" }}>Paradise Nursery</h3>
          <i style={{ color: "white" }}>Where Green Meets Serenity</i>
        </div>
      </div>
    </div>
  );
}

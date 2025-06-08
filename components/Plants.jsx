export default function Plants({ onhandlePlantsClick }) {
  return (
    <>
      <div onClick={onhandlePlantsClick} style={{ cursor: "pointer" }}>
        Plants
      </div>
    </>
  );
}

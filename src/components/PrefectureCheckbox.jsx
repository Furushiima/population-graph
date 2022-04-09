import PropTypes from "prop-types";

function PrefectureCheckbox(props) {
  const { prefCode, prefName, togglePrefectureCheckbox } = props;
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => {
          togglePrefectureCheckbox(prefCode);
        }}
      />
      <span>{prefName}</span>
    </div>
  );
}

PrefectureCheckbox.propTypes = {
  prefCode: PropTypes.number.isRequired,
  prefName: PropTypes.string.isRequired,
  togglePrefectureCheckbox: PropTypes.func.isRequired,
};

export default PrefectureCheckbox;

import PropTypes from "prop-types";

function PrefectureCheckbox(props) {
  const { prefName } = props;
  return (
    <div>
      <input type="checkbox" />
      <span>{prefName}</span>
    </div>
  );
}

PrefectureCheckbox.propTypes = {
  prefName: PropTypes.string.isRequired,
};

export default PrefectureCheckbox;

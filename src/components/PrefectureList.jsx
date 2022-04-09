import PrefectureCheckbox from "./PrefectureCheckbox";

function PrefectureList(props) {
  const PrefectureCheckboxList = props.prefectureList.map((prefecture) => (
    <PrefectureCheckbox
      key={prefecture.prefCode}
      prefCode={prefecture.prefCode}
      prefName={prefecture.prefName}
      togglePrefectureCheckbox={props.togglePrefectureCheckbox}
    />
  ));
  return PrefectureCheckboxList;
}

export default PrefectureList;

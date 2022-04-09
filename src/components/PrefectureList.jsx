import PrefectureCheckbox from "./PrefectureCheckbox";

function PrefectureList(props) {
  const PrefectureCheckboxList = props.prefectureList.map((prefecture) => (
    <PrefectureCheckbox
      key={prefecture.prefCode}
      prefName={prefecture.prefName}
    />
  ));
  return PrefectureCheckboxList;
}

export default PrefectureList;

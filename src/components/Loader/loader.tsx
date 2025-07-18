import { HashLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderWrapper}>
      <HashLoader color="#088169ff" loading={true} size={50} />
    </div>
  );
}

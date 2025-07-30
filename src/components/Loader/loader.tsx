import { RiseLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderWrapper}>
      <RiseLoader color="#d541d9" loading={true} size={30} />
    </div>
  );
}

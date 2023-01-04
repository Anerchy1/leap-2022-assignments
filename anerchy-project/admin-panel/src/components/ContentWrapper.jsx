import Table from "./Table/Table";
import { IconName, SlPlus } from "react-icons/sl";

export default function ContentWrapper({ title }) {
  return (
    <div className="container-sm body-container">
      <div className="d-flex justify-content-around align-items-center">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <button className="btn btn-sm btn-primary">
            Create <SlPlus />
          </button>
        </div>
      </div>
      <Table />
    </div>
  );
}

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MenuPositionCreate from "../components/Menu/Positions/PositionCreate";
import MenuPositionEdit from "../components/Menu/Positions/PositionEdit";
import MenuPositionList from "../components/Menu/Positions/PositionList";
import { ModalContext } from "../contexts/ModalContext";
import Heading from "./Heading";

export default function MenuPosition() {
  const { setModalContent, setModalShow, setModalTitle } =
    useContext(ModalContext);

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/menu-positions")
      .then((res) => {
        setPositions(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const modalClose = () => {
    setModalContent(<></>);
    setModalShow(false);
  };
  const afterSubmit = (category) => {
    setModalShow(false);
    setPositions([...positions, category]);
  };

  const showCreateModal = () => {
    setModalContent(<MenuPositionCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };
  const afterEdit = (position) => {
    modalClose();
    let newPositions = positions.map((pos) => {
      if (pos.id === position.id) {
        return position;
      }
      return pos;
    });
    setPositions(newPositions);
  };
  const showEditModal = (position) => {
    setModalContent(
      <MenuPositionEdit position={position} afterEdit={afterEdit} />
    );
    setModalShow(true);
  };
  return (
    <>
      <div className="body-container container-sm">
        <Heading handleShow={showCreateModal} title="Menu Positions" />
        <MenuPositionList items={positions} onEdit={showEditModal} />
      </div>
    </>
  );
}

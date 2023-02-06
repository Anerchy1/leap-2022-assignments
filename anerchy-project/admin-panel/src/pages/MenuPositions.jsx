import axios from "axios";
import { useEffect, useState } from "react";
import MenuPositionCreate from "../components/Menu/Positions/PositionCreate";
import MenuPositionEdit from "../components/Menu/Positions/PositionEdit";
import MenuPositionList from "../components/Menu/Positions/PositionList";
import DynamicModal from "../components/utils/DynamicModal";
import Heading from "./Heading";

export default function MenuPosition() {
  const [positions, setPositions] = useState([]);
  const [modalShow, setModalshow] = useState(false);

  const [modalContent, setModalContent] = useState(<></>);
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
    setModalshow(false);
  };
  const afterSubmit = (category) => {
    setModalshow(false);
    setPositions([...positions, category]);
  };

  const showCreateModal = () => {
    setModalContent(<MenuPositionCreate afterSubmit={afterSubmit} />);
    setModalshow(true);
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
    setModalshow(true);
  };
  return (
    <>
      <div className="body-container container-sm">
        <Heading handleShow={showCreateModal} title="Menu Positions" />
        <MenuPositionList items={positions} onEdit={showEditModal} />
        <DynamicModal
          content={modalContent}
          show={modalShow}
          handleClose={modalClose}
          title="Create Post"
        />
      </div>
    </>
  );
}

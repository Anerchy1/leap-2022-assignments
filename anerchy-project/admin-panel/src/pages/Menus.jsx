import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuPositionCreate from "../components/Menu/Positions/PositionCreate";
import MenuPositionEdit from "../components/Menu/Positions/PositionEdit";
import MenuPositionList from "../components/Menu/Positions/PositionList";
import DynamicModal from "../components/utils/DynamicModal";
import Heading from "./Heading";

export default function Menus() {
  const [position, setPosition] = useState(null);
  const [modalShow, setModalshow] = useState(false);
  const [menus, setMenus] = useState([]);
  const { id } = useParams();
  const [modalContent, setModalContent] = useState(<></>);

  useEffect(() => {
    axios.get("http://localhost:8001/menu-positions/" + id).then((res) => {
      setPosition(res.data);
    });
    axios
      .get("http://localhost:8001/menus?positionId=" + id)
      .then((res) => {
        setMenus(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const modalClose = () => {
    setModalContent(<></>);
    setModalshow(false);
  };
  const afterSubmit = (menu) => {
    setModalshow(false);
    setMenus([...menus, menu]);
  };

  const showCreateModal = () => {
    setModalContent(<MenuPositionCreate afterSubmit={afterSubmit} />);
    setModalshow(true);
  };
  const afterEdit = (menu) => {
    modalClose();
    let newMenus = menus.map((item) => {
      if (item.id === menu.id) {
        return menu;
      }
      return item;
    });
    setMenus(newMenus);
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
        <Heading
          handleShow={showCreateModal}
          title={`"${position?.name}" - Menus`}
        />
        <p>meni id</p>
        <MenuPositionList items={menus} onEdit={showEditModal} />
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

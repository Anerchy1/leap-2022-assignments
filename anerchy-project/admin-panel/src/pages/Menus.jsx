import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuPositionCreate from "../components/Menu/Positions/PositionCreate";
import MenuPositionEdit from "../components/Menu/Positions/PositionEdit";
import MenuPositionList from "../components/Menu/Positions/PositionList";
import { ModalContext } from "../contexts/ModalContext";
import Heading from "./Heading";

export default function Menus() {
  const { setModalContent, setModalShow, setModalTitle } =
    useContext(ModalContext);

  const [position, setPosition] = useState(null);
  const [menus, setMenus] = useState([]);
  const { id } = useParams();

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
    setModalShow(false);
  };
  const afterSubmit = (menu) => {
    setModalShow(false);
    setMenus([...menus, menu]);
  };

  const showCreateModal = () => {
    setModalContent(<MenuPositionCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
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
    setModalShow(true);
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
      </div>
    </>
  );
}

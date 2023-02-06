import { useState } from "react";

function DropdownDivider() {
  return (
    <li>
      <hr className="dropdown-divider" />
    </li>
  );
}
function DropdownItem({ item }) {
  return (
    <li>
      <a className="dropdown-item" href={item.link}>
        {item.label}
      </a>
    </li>
  );
}
export default function NavbarDropDown({ items = [], img }) {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div>
      <div className="dropdown text-end">
        <a
          onClick={toggleDropDown}
          href="#"
          className="d-block link-success fs-2  text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={img}
            alt="mdo"
            href="https://pinecone.mn/"
            width="32"
            height="32"
            className="rounded-circle"
          />
        </a>
        <ul
          className={`dropdown-menu text-small end-0 ${showDropDown && "show"}`}
        >
          {items.map((item, index) => {
            if (item.label === "---") {
              return <DropdownDivider key={`dropdown-item-${index}`} />;
            } else
              return (
                <DropdownItem item={item} key={`dropdown-item-${index}`} />
              );
          })}
        </ul>
      </div>
    </div>
  );
}

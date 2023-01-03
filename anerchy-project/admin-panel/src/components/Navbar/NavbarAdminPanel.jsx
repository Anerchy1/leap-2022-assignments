import { useState } from "react"; 

export default function NavbarAdminPanel({items =[], img}){
    const [showDropDown, setShowDropDown] = useState(false);

    const toggleDropDown = () =>{
        setShowDropDown(!showDropDown);
    };
        return (
            <div>
                <div className="dropdown text-end">
                  <a onClick={toggleDropDown} href="#" className="d-block link-success fs-2  text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={img}alt="mdo" href="https://pinecone.mn/" width="32" height="32" className="rounded-circle" />
                  </a>
                  <ul className={`dropdown-menu text-small end-0 ${showDropDown && 'show'}`}>
                    {items.map((item)=>{
                        if(item.label !== '---'){
                            return (
                                    <li>
                                        <a className="dropdown-item" href={item.link}>
                                            {item.label}
                                        </a>
                                    </li>
                                );
                        } 
                        return (
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                        )
                        
                    })}
                  </ul>
                </div>
            </div>
            )
};
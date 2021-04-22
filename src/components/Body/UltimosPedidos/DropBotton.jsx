import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,DropdownItem,DropdownMenu, DropdownToggle} from 'reactstrap';

const DropBotton=({})=>{
    const [dropDown,setDropDown]=useState(false);
    const abrirCerrarDropDown=()=>{
        setDropDown(!dropDown);
    }
    const clickAction=(props)=>{
        console.log(props);
    }
    return(
        <div>
            <Dropdown isOpen={dropDown} toggle={abrirCerrarDropDown}>
                <DropdownToggle caret className="dropdown">
                    Marcas
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={()=>clickAction("Marca1")}>Marca1</DropdownItem>
                    <DropdownItem onClick={()=>clickAction("Marca2")}>Marca2</DropdownItem>
                    <DropdownItem onClick={()=>clickAction("Marca3")}>Marca3</DropdownItem>
                    <DropdownItem onClick={()=>clickAction("Marca4")}>Marca4</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
export default DropBotton;
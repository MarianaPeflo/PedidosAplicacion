import Logo from './Logo';

const Header=()=>{
    return(
       <div className="menubtn">
        <Logo/>
        {/* <MenuLinks
          onClickHome={()=>console.log("Inicio")}
          onClickAdd={()=>console.log("Agregar cliente")}
          onClickIn={()=>console.log("Login")}
        /> */}
        </div>
    )
}
export default Header;
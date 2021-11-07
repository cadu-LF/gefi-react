import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, SubMenu, MenuItem } from 'react-pro-sidebar';
import {GoThreeBars} from 'react-icons/go'
import { BsCartPlus, BsCurrencyDollar, BsFillPersonPlusFill } from 'react-icons/bs'
import {CgNotes} from 'react-icons/cg'
import { useEffect, useState } from 'react';

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true)
  const [toggle, setToggle] = useState(false);
  const [sessaoSidebar, setSessaoSidebar] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;

    if (path == '/vizualizar') {
      setShowSidebar(true)
      setSessaoSidebar(true);
    }
    else if (path === '/login'){
      setShowSidebar(false)
    }
    else {
      setShowSidebar(true)
      setSessaoSidebar(false);
    }
  }, [])

  const toggleChange = () => {
    setToggle(!toggle);
  }
  return(
    // colocar verificação de showSidebar
    <ProSidebar>
      <GoThreeBars onClick={toggleChange}/>
      {toggle && (
        <>
          <SidebarHeader>
          <h1>Sidebar Header</h1>
          </SidebarHeader>
          <SidebarContent>
              <MenuItem>
                <BsFillPersonPlusFill />
                <span>Cadastrar Membro</span>
              </MenuItem>
              <MenuItem>
                <CgNotes />
                <span>Vizualizar Cadastros</span>
              </MenuItem>
              <SubMenu>
                <BsCurrencyDollar />
                <span>Menu Financeiro</span>
                <MenuItem>
                  <BsCartPlus />
                  <span>Cadastrar Compra</span>
                </MenuItem>
                <MenuItem>
                  <span>Vizualizar Compras</span>
                </MenuItem>
                <MenuItem>
                  <span>Vizualizar Vencimento do Registro</span>
                </MenuItem>
                <MenuItem>
                  <span>Vizualizar Vencimento das mensalidades</span>
                </MenuItem>
              </SubMenu>
          </SidebarContent>
          <SidebarFooter>
            <h1>Sidebar Footer</h1>
          </SidebarFooter>
        </>
      )}
    </ProSidebar>
  )
}

import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, SubMenu, MenuItem } from 'react-pro-sidebar';

import {GoThreeBars} from 'react-icons/go';
import { BsBagPlus, BsCurrencyDollar } from 'react-icons/bs';
import { BiGitRepoForked, BiShoppingBag } from 'react-icons/bi';
import { GiBarracksTent, GiFleurDeLys } from 'react-icons/gi';
import { SiWolframlanguage } from 'react-icons/si';
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiOutlineCompass, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { GrConfigure } from 'react-icons/gr';

import {Link, useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react';

import './styles.css'

export const Sidebar = () => {
  const history = useHistory();
  const [showSidebar, setShowSidebar] = useState(true)
  const [toggle, setToggle] = useState(false);
  const [activateSubmenu, setActivateSubmenu] = useState(false);
  const [sessaoSidebar, setSessaoSidebar] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;

    console.log('useEffect')
    if (path.substr(0, 11) == '/visualizar') {
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
  }, [history])

  const toggleChange = () => {
    setToggle(!toggle);
    setActivateSubmenu(false);
  }

  const submenuChange = () => {
    setActivateSubmenu(!activateSubmenu);
  }

  const goToPreviousPage = () => {
    history.goBack();
  }

  return(
    <ProSidebar>
      <GoThreeBars size='30px' onClick={toggleChange}/>
      {toggle && !sessaoSidebar &&(
        <div className='sidebar'>
          <SidebarHeader>
          <h1>Sidebar Header</h1>
          </SidebarHeader>
          <SidebarContent>
              <MenuItem>
                <Link to='/usuarios' onClick={toggleChange}>
                  <AiOutlineUser />
                  <span>Gerenciar Usuários</span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to='/sessoes' onClick={toggleChange}>
                  <HiOutlineUserGroup />
                  <span>Gerenciar Sessões</span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to='/tipo-produto' onClick={toggleChange}>
                  <GrConfigure />
                  <span>Gerenciar Tipos de Produtos</span>
                </Link>
              </MenuItem>
              <SubMenu 
                onClick={submenuChange}
                title='Menu Financeiro' 
                icon={<BsCurrencyDollar />}
              >
                {activateSubmenu && (
                  <>
                  <MenuItem>
                    <Link to='/cadastrar-produto' onClick={toggleChange}>
                      <BsBagPlus />
                      <span>Cadastrar Produto</span>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/produto' onClick={toggleChange}>
                      <BiShoppingBag />
                      <span>Visualizar Produto</span>
                    </Link>
                  </MenuItem>
                  </>
                )}
              </SubMenu>
          </SidebarContent>
          <SidebarFooter onClick={goToPreviousPage}>
              <TiArrowBackOutline />
              <span>Voltar</span>
          </SidebarFooter>
        </div>
      )}
      {toggle && sessaoSidebar && (
        <div className='sidebar'>
          <SidebarHeader>
          <h1>Sidebar Header</h1>
          </SidebarHeader>
          <SidebarContent>
            <MenuItem>
              <SiWolframlanguage />
              <span>Alcateia Amarela</span>
            </MenuItem>
            <MenuItem>
              <SiWolframlanguage />
              <span>Alcateia Branca</span>
            </MenuItem>
            <MenuItem>
              <SiWolframlanguage />
              <span>Alcateia Preta</span>
            </MenuItem>
            <MenuItem>
              <GiBarracksTent />
              <span>Tropa 1</span>
            </MenuItem>
            <MenuItem>
              <GiBarracksTent />
              <span>Tropa 2</span>
            </MenuItem>
            <MenuItem>
              <GiBarracksTent />
              <span>Tropa 3</span>
            </MenuItem>
            <MenuItem>
              <AiOutlineCompass />
              <span>Tropa Sênior</span>
            </MenuItem>
            <MenuItem>
              <BiGitRepoForked color='red'/>
              <span>Clã Pioneiro</span>
            </MenuItem>
            <MenuItem>
              <GiFleurDeLys />
              <span>Chefia</span>
            </MenuItem>
          </SidebarContent>
          <SidebarFooter onClick={goToPreviousPage}>
            <TiArrowBackOutline />
            <span>Voltar</span>
          </SidebarFooter>
        </div>          
      )}
    </ProSidebar>
  )
}

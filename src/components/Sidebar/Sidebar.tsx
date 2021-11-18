import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, SubMenu, MenuItem } from 'react-pro-sidebar';

import { RiTestTubeFill } from 'react-icons/ri';
import {GoThreeBars} from 'react-icons/go';
import { BsBagPlus, BsCurrencyDollar, BsFillPersonPlusFill } from 'react-icons/bs';
import {CgNotes} from 'react-icons/cg';
import { IoIosCart } from 'react-icons/io';
import { BiShoppingBag, BiGitRepoForked } from 'react-icons/bi';
import { GiBarracksTent, GiFleurDeLys } from 'react-icons/gi';
import { SiWolframlanguage } from 'react-icons/si';
import { MdVolunteerActivism, MdOutlineFiberNew } from 'react-icons/md';
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiFillCalendar, AiFillFileMarkdown, AiOutlineCompass } from 'react-icons/ai';

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
    // colocar verificação de showSidebar
    <ProSidebar>
      <GoThreeBars size='30px' onClick={toggleChange}/>
      {toggle && !sessaoSidebar &&(
        <div className='sidebar'>
          <SidebarHeader>
          <h1>Sidebar Header</h1>
          </SidebarHeader>
          <SidebarContent>
              <MenuItem>
                <Link to='/'>
                  <RiTestTubeFill/>
                  <span>Teste</span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to='/nova'>
                  <MdOutlineFiberNew />
                  <span>Nova</span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to='/cadastrar-membro'>
                  <BsFillPersonPlusFill />
                  <span>Cadastrar Membro</span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to='/cadastrar-produto'>
                  <BsBagPlus />
                  <span>Cadastrar Produto</span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to='/cadastrar-responsavel'>
                  <BsFillPersonPlusFill />
                  <span>Cadastrar Responsável</span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to='/visualizar-cadastro'>
                  <CgNotes />
                  <span>Visualizar Cadastros</span>
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
                    <Link to='/cadastrar-compra'>
                      <BiShoppingBag />
                      <span>Cadastrar Compra</span>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/visualizar-compra'>
                      <IoIosCart />
                      <span>Visualizar Compras</span>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/visualizar-registro'>
                      <AiFillCalendar />
                      <span>Visualizar Vencimento do Registro</span>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/visualizar-mensalidades'>
                      <AiFillFileMarkdown />
                      <span>Vizualizar Vencimento das mensalidades</span>
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

import { HeaderContainter } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '../../assets/logoIgnite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainter>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainter>
  )
}

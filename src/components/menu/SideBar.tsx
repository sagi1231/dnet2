import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/Logo/ColoredLogo.svg'
import { ReactComponent as TemplateIcon } from '../../assets/Icons/TemplateEngine.svg'
import { ReactComponent as DownloadIcon } from '../../assets/Icons/Download.svg'
import { ReactComponent as ArrowRight } from '../../assets/Icons/ArrowRight.svg'
import { ReactComponent as GlobeIcon } from '../../assets/Icons/Globe.svg'
import Link from '../common/Link'
import MenuItemBold from './MenuItemBold'
import { Divider } from 'primereact/divider'
import Button from '../common/form/Button'

import RecentWebsites from './RecentWebsites'
import React from 'react'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Dialog } from 'primereact/dialog'
interface Propse {
  onHide: () => void
}
const Wrapper = styled.div`
  background: white;
  height: 100%;
  flex-direction: column;
  border-right: 1px solid #e2e8f0;
`

const RocketImage = styled.img`
  width: 35%;
  bottom: 30px;
  left: 20px;
  position: absolute;
  transition-duration: 0.2s;
`

const LogoWrapper = styled.div`
  width: 100%;
  height: 85px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  margin-top: 20px;
  align-items: flex-start;
`

const SideBar: React.FC<Propse> = ({ onHide }) => {
  return (
    <Dialog
      closable={true}
      modal={true}
      visible
      position={'left'}
      style={{
        width: '14rem',
        height: 'calc(100vh)',
        margin: '0',
        boxShadow: 'none',
        borderLeft: 'solid 1px var(--border-color)',
        borderRadius: '0px',
        maxHeight: '100%',
      }}
      draggable={false}
      resizable={false}
      onHide={onHide}
    >
      <Wrapper>
        <LogoWrapper>
          <Link path="/websites" className="flex align-items-center">
            <Logo />
          </Link>
        </LogoWrapper>
        <MenuWrapper>
          <MenuItemBold path="/websites">
            <ArrowRight />
            Active Webistes
            <GlobeIcon />
          </MenuItemBold>
          <MenuItemBold path="/plugins">
            <ArrowRight />
            Connection Plugins
            <DownloadIcon />
          </MenuItemBold>
          <MenuItemBold path="builder">
            <ArrowRight />
            Template Collection
            <TemplateIcon />
          </MenuItemBold>
        </MenuWrapper>
        <Divider />
      </Wrapper>
    </Dialog>
  )
}

export default SideBar

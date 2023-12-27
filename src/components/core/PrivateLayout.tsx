import TopMenu from './topMenu'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import SideBar from '../menu/SideBar'
interface Props {
  children: React.ReactElement
  showBreadcrumbs?: boolean
}

const ContentWrapper = styled.div`
  width: 100%;
`

const PageWrapperOverflow = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 30px;
  height: calc(100vh - 85px);
  overflow: scroll;
`

const SidebarWrapper = styled.div`
  width: 14rem;
  height: 100vh;
`

const PrivateLayout: React.FC<Props> = ({ children, showBreadcrumbs }) => {
  return (
    <div className="flex">
      {/* <SidebarWrapper>
        <SideBar />
      </SidebarWrapper> */}
      <ContentWrapper>
        <TopMenu />
        <React.Suspense fallback={<p>loading...</p>}>
          <PageWrapperOverflow>{children}</PageWrapperOverflow>
        </React.Suspense>
      </ContentWrapper>

      {/* {showPackagesModal && <UpgradePackage />} */}
    </div>
  )
}

export default PrivateLayout

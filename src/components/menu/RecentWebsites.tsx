import React from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import SideBarWebsiteItem from './SideBarWebsiteItem'
import { useParams } from 'react-router'

const SubCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & a:nth-child(1) .square-colored {
    background: #a960ee;
  }
  & a:nth-child(2) .square-colored {
    background: #f92b75;
  }
  & a:nth-child(3) .square-colored {
    background: #ffcb57;
  }
  & a:nth-child(4) .square-colored {
    background: #90e0ff;
  }
`

const RecentWebsites: React.FC = () => {
  return <SubCategoriesWrapper></SubCategoriesWrapper>
}

export default RecentWebsites

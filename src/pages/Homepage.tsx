import React, { useCallback, useEffect, useState } from 'react'

import styled from 'styled-components'

import FadeIn from '../components/common/FadeIn'
import CardSkeleton from '../components/common/skeletons/CardSkeleton'
import FormStyle from '../components/common/form/FormStyle'

const ContentWrapper = styled.div`
  direction: rtl;
`

const Homepage: React.FC = () => {
  return (
    <ContentWrapper>
      <FormStyle></FormStyle>

      <FadeIn>
        <React.Suspense fallback={<CardSkeleton />}></React.Suspense>
      </FadeIn>
    </ContentWrapper>
  )
}

export default Homepage

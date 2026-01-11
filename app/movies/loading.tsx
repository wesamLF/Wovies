import React from 'react'
import SkeletonCard from '../components/SkeletonCard'
import GridContainer from '../components/GridContainer'

const loading = () => {
  return (
    <>
      <GridContainer>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </GridContainer>
    </>
  )
}

export default loading
import React from 'react'
import type { Movie } from '../types/movie'
import MovieCard from './MovieCard'
import SectionTitle from './SectionTitle'
import GridContainer from './GridContainer'

const SimilarMovies = ({ similar }: { similar: Movie[] }) => {
  const slicedMovies = similar?.slice(0, 6)
  return (<>
    {slicedMovies.length != 0 &&
      <div className="">
        <SectionTitle title={"Similer Movies:"} />

        <GridContainer>
          {slicedMovies.map((movie) => (<MovieCard key={movie.id} movieData={movie} />))}

        </GridContainer>

      </div>
    }
  </>
  )
}

export default SimilarMovies
import Image from 'next/image'
import React from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'

interface Props {
  // when using Firebase
  // movie: Movie | DocumentData
  movie: Movie
}
const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-20 min-w-[100px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 ">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail

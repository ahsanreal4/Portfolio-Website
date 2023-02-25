import React from 'react'

export interface IPaginationSlicks {
  numberOfSlicks: number
  activeColor: string
  inActiveColor: string
  activeIndex: number
  slicksGap: number
  setCurrentTestimonialsPage: React.Dispatch<number>
}

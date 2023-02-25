import { NextPage } from 'next'
import { IPaginationSlicks } from './PaginationSlicks.types'

const PaginationSlicks: NextPage<IPaginationSlicks> = ({
  activeColor,
  inActiveColor,
  activeIndex,
  numberOfSlicks,
  slicksGap,
  setCurrentTestimonialsPage
}) => {
  const renderSlick = (index: number) => (
    <div
      key={index}
      style={{
        height: 10,
        width: 10,
        backgroundColor: index === activeIndex ? activeColor : inActiveColor,
        borderRadius: 10,
        cursor: 'pointer'
      }}
      onClick={() => setCurrentTestimonialsPage(index + 1)}
    ></div>
  )

  const slicks: number[] = []
  for (let i = 0; i < numberOfSlicks; i++) slicks.push(i)
  return (
    <>
      <div
        style={{ display: 'flex', gap: slicksGap, justifyContent: 'center' }}
      >
        {slicks.map((index: number) => renderSlick(index))}
      </div>
    </>
  )
}

export default PaginationSlicks

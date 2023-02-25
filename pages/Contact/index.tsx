import { NextPage } from 'next'
import GetInTouch from './GetInTouch/GetInTouch'
import ContactHeader from './Header/Header'
import { IContactProps } from './index.types'

const Contact: NextPage<IContactProps> = ({ setCurrentPage }) => (
  <>
    <ContactHeader />
    <GetInTouch setCurrentPage={setCurrentPage} />
  </>
)

export default Contact

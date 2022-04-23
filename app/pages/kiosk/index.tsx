import { getFirestore } from 'firebase/firestore/lite'
import type { NextPage } from 'next'
import { useState } from 'react'
import { saveNewOrder } from '../../src/firebase/order.service'

const KioskIndex: NextPage = ({ fb }: any) => {
  const db = getFirestore(fb)
  const [data, setData] = useState<any>({
    status: 10,
    user_address: 'undefined',
  })

  function handleInput(e: any) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  function handleSubmit() {
    saveNewOrder(db, data)
  }
  return (
    <>
      <input type="number" name="status" onChange={handleInput} />
      <input type="text" name="user_address" onChange={handleInput} />
      <button onClick={handleSubmit}>Register</button>
    </>
  )
}

export default KioskIndex

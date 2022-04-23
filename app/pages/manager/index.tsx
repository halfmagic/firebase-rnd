import { getFirestore } from 'firebase/firestore/lite'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getOrders } from '../../src/firebase/useFirebase'

const ManagerIndex: NextPage = ({ fb }: any) => {
  const db = getFirestore(fb)
  const [orders, setOrders] = useState<any>([])

  useEffect(() => {
    getOrders(db).then((data: any) => {
      console.log(data)

      setOrders(data)
    })
  }, [])

  return (
    <>
      <h1>hello world</h1>
      <ul>
        {orders.map((order: any, i: number) => {
          return <li key={i}>{order.status}</li>
        })}
      </ul>
    </>
  )
}
export default ManagerIndex

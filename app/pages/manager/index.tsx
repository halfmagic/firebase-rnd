import { collection, getFirestore, onSnapshot } from 'firebase/firestore'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getOrders } from '../../src/firebase/order.service'

const ManagerIndex: NextPage = ({ fb }: any) => {
  const db = getFirestore(fb)
  const [orders, setOrders] = useState<any>([])

  useEffect(() => {
    getOrders(db).then((data: any) => {
      console.log(data)

      setOrders(data)
    })
  }, [])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'orders'), (snapshot) => {
      const data: any[] = []
      snapshot.forEach((doc: any) => {
        data.push(doc.data())
      })
      setOrders(data)
    })
  }, [])

  return (
    <>
      <h1>hello world</h1>
      <ul>
        {orders.map((order: any, i: number) => {
          return (
            <li key={i}>
              <h3>Status: {order.status}</h3>
              <h3>User: {order.user_address}</h3>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default ManagerIndex

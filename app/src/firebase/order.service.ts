import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { nanoid } from 'nanoid'
import { Order } from '../types/order.type'

export async function getOrders(db: any) {
  const ordersCol = collection(db, 'orders')
  const orderSnapshot = await getDocs(ordersCol)
  const orderList = orderSnapshot.docs.map((doc) => doc.data())
  return orderList
}

export async function saveNewOrder(db: any, order: Order) {
  const id = nanoid()
  await setDoc(doc(db, 'orders', id), order)
}

import { collection, getDocs } from 'firebase/firestore/lite'

export async function getOrders(db: any) {
  const ordersCol = collection(db, 'orders')
  const orderSnapshot = await getDocs(ordersCol)
  const orderList = orderSnapshot.docs.map((doc) => doc.data())
  return orderList
}

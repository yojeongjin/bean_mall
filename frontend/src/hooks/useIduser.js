import { useSelector } from "react-redux"

export default function useIduser() {
  const idUser = useSelector((state) => state.cart.idUser)

  return idUser
}
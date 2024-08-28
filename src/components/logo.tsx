import Image from "next/image"
import Link from "next/link"
import H1 from "./h1"

const Logo = () => {
  return (
    <Link href={'/'}><h1 className="text-xl font-bold">EVENTO</h1></Link>
  )
}

export default Logo
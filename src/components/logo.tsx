import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href={'/'}><Image src={"https://bytegrad.com/course-assets/react-nextjs/evento.png"} alt="lEvento Logo"  height={60} width={60} /></Link>
  )
}

export default Logo
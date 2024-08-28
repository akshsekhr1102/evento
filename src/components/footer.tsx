import Link from "next/link"


const routes=[
  {
    path:'/terms-condition',
    name:'terms & condition'
  },
  {
    path:'/privacy-policy',
    name:'Privacy Policy'
  }
]

const Footer = () => {
  return (
    <footer className=' flex h-16 justify-between items-center mt-auto border-t border-white/10 px-3 sm:px-9 text-xs text-white/25'>
      <small>&copy; 2029 AKSHYANSHU, All rights reserved.</small>
      <ul className="flex space-x-4">
        {routes.map((route)=>(
          <li key={route.name}>
            <Link href={route.path} >{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
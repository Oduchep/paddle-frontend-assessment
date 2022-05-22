import Link from "next/link"
import { useContext } from "react"
import { DataContext } from "../../utilities/data"
import Button from "../elements/button"
import Image from "next/image"
import NavLink from "../elements/nav-link"

const NavBar = () => {
    const {contact, openContact} = useContext(DataContext)
    console.log(contact)
    return (
        <>
          <nav className="flex justify-between items-center py-3">
              <Link href='/'>
                <Image src="/metricks-light.png" width={100} height={80} alt="logo" className="cursor-pointer"/>
              </Link>
              <div className="hidden md:block md:w-5/12 xl:w-3/12">
                  <ul className="uppercase text-xs font-semibold flex justify-between items-center">
                    <NavLink location="About us" href="/about" onClick={() => openContact(false)}/>
                    <NavLink location="Blog" href="/blog" onClick={() => openContact(false)}/>
                    <li> <Button label="Contact us" onClick={() => openContact(true)}/> </li>
                  </ul>
              </div>
          </nav>
        </>
      )
    }
export default NavBar
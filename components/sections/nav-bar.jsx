import Link from "next/link"
import { useContext } from "react"
import { DataContext } from "../../utilities/data"
import Button from "../elements/button"
import Image from "next/image"

const NavBar = () => {
    const {contact, openContact} = useContext(DataContext)
    console.log(contact)
    return (
        <>
          <nav className="flex justify-between items-center py-3">
              <div>
                <Image src="/metricks-light.png" width={100} height={80} alt="logo"/>
              </div>
              <div className="hidden md:block md:w-5/12 xl:w-3/12">
                  <ul className="uppercase text-xs text-white font-semibold flex justify-between items-center">
                      <li onClick={() => openContact(false)} >
                        <Link href="/about"> About us </Link>
                      </li>
                      <li onClick={() => openContact(false)}> 
                        <Link href="/blog"> Blog </Link>
                      </li>
                      <li> <Button label="Contact us" onClick={() => openContact(true)}/> </li>
                  </ul>
              </div>
          </nav>
        </>
      )
    }
export default NavBar
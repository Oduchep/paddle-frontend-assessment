import Link from "next/link"
import Button from "../elements/button"

const NavBar = () => {
    
    return (
        <>
          <nav className="flex justify-between py-6">
              <div>
                <h1> Loo </h1>
              </div>
              <div className="hidden md:block md:w-5/12 xl:w-3/12">
                  <ul className="uppercase text-xs text-white font-semibold flex justify-between items-center">
                      <li>
                        <Link href="/about"> About us </Link>
                      </li>
                      <li> 
                        <Link href="/blog"> Blog </Link>
                      </li>
                      <li> <Button label="Contact us" link="/blog"/> </li>
                  </ul>
              </div>
          </nav>
        </>
      )
    }
export default NavBar
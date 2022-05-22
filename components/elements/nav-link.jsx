import Link from 'next/link'
import { useRouter } from 'next/router'


const NavLink = ({location, href, onClick}) => {
    //assigning location variable
    const router = useRouter();

    //destructuring pathname from location
    const { pathname } = router;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");


  return (
    <li className={`${splitLocation[1] === href.split("/")[1] ? "text-[#FF00F7]" : "text-white"}`} onClick={onClick}>
        <Link href={href}>
            {location}
        </Link>
    </li>
  )
}

export default NavLink
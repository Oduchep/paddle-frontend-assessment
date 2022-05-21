import Link from "next/link"

const Button = ({label, link}) => {
  return (
    <button className="w-full h-full uppercase text-white text-xs font-semibold rounded-full bg-[#271AC1] px-6 py-3">
        <Link href={link}>
            { label }
        </Link>
    </button>
  )
}

export default Button
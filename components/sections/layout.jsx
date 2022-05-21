import NavBar from "./nav-bar"

const Layout = ({children}) => {

  return (
    <>
      <div className="relative  mx-auto px-5 lg:px-12">
          <NavBar/>
          <main className='container mx-auto'>{children}</main>
      </div>
    </>
  )
}

export default Layout
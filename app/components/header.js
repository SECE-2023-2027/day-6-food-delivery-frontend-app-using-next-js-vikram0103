const Header = () => {
  return (
    <div className="flex justify-between mt-3  h-10 bg-white">
        <img src="/assets/capicon.png" className="w-10 h-10 ml-40" />
        <nav className="flex relative right-10 gap-6">
            <h1 className="text-orange-400">Home</h1>
            <h1>Help</h1>
            <h1 className="flex">Search<img src="/assets/searchicon.png" className="w-4 h-4 mt-2"/></h1>
            <h1 className="flex">Cart <img src="/assets/carticon.png"  className="w-4 h-4 mt-2" /></h1>
        </nav>

    </div>
  )
}

export default Header
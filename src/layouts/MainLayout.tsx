const MainLayout = ({children}: {children:React.ReactNode})=>{
 return (
    <div  className="min-h-screen bg-zinc-950 text-white" >
        {children}
    </div>
 )   
}

export default MainLayout;
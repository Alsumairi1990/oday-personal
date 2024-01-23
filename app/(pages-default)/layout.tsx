import NavBar from "../NavBar"



export default function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
            

            <div className="h-full">
                <NavBar />
            {children}
            </div>
          
    )
  }
     
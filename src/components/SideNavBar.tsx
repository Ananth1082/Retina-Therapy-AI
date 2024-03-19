import { SideNavAccordian } from "./SideNavAccordian"
// This is a simple component that will be used to display the side navigation bar.
const SideNavBar = () => {
  return (
    <>
        
        <div className="p-4 fixed left-0 top-20 h-[90vh] w-[15vw] border-r-2 border-gray">
            <SideNavAccordian/>
        </div>
    </>
  )
}

export {SideNavBar}

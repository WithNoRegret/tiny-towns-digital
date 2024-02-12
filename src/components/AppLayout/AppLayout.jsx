import  AppHeader  from "./AppHeader/AppHeader" 
import  AppFooter  from "./AppFooter/AppFooter" 
import  AppContent  from "./AppContent/AppContent" 

export default function AppLayout( { contentType } ) {
  return (
    <>
        <AppHeader />
        <AppContent 
          contentType={contentType}
        />
        <AppFooter />
    </>
  );
}

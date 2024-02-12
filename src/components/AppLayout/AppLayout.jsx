import  AppHeader  from "./AppHeader/AppHeader" 
import  AppFooter  from "./AppFooter/AppFooter" 
import  AppContent  from "./AppContent/AppContent" 

export default function AppLayout() {
  return (
    <>
        <AppHeader />
        <AppContent />
        <AppFooter />
    </>
  );
}

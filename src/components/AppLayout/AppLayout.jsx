import  AppHeader  from "./AppHeader/AppHeader" 
import  AppContent  from "./AppContent/AppContent" 

export default function AppLayout( { contentType } ) {
  return (
    <>
        <AppHeader 
          contentType={contentType}
        />
        <AppContent 
          contentType={contentType}
        />
    </>
  );
}

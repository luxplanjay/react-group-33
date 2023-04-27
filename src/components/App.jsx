
import { PageTitle } from "components/PageTitle/PageTitle";
import { EventBoard } from "./EventBoard/EventBoard";
// upcomingEvents
import upcoming from "./upcoming.json"



export const App = () => {
  return (<>
 
<PageTitle text="24th Core Worlds Coalition Conference" />
<EventBoard events={upcoming}/>
    </>
  );
};
  
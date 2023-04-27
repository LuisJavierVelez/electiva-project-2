import { GeneralLayout } from "../layouts/GeneralLayouts/GeneralLayout";
import { NotFound } from "../pages/General/NotFound/NotFound";



const GeneralRoutes = [
    
    {path: "*", component: NotFound, layout: GeneralLayout}
];
const AllRoutesProject = [...GeneralRoutes];
export default AllRoutesProject;
import RenderDjinnDetail from "../components/RenderDjinnDetail";
// import { DJINN_INDEX } from "../shared/djinnindex";
import djinnindex from '../shared/djinnindex.json';

const DjinnDetailsScreen = ({ route }) => {
    const { djinniName } = route.params;

    return (
        <RenderDjinnDetail djinni={djinnindex[djinniName.toLowerCase()]} />
    );
}

export default DjinnDetailsScreen;
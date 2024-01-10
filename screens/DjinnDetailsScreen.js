import RenderDjinnDetail from "../components/RenderDjinnDetail";
import { DJINN_INDEX } from "../shared/djinnindex";

const DjinnDetailsScreen = ({ route }) => {
    const { djinniName } = route.params;

    return (
        <RenderDjinnDetail djinni={DJINN_INDEX[djinniName.toLowerCase()]} />
    );
}

export default DjinnDetailsScreen;
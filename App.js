import { NavigationContainer } from "@react-navigation/native";
import Main from './screens/MainComponent';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import LoadingView from './components/LoadingView';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<LoadingView />}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

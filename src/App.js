import './App.css';
import Form from "./components/Form/Form";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Form/>
            </div>
        </Provider>
    );
}

export default App;

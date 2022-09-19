import "./style/App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { RoutesBlock } from "./features/RoutingBlock";

const routes = [
	{
		id: 0,
		label: "Feature One",
		route: "/",
		ariaLabel: "Feature One Link",
	},
	{
		id: 1,
		label: "Feature Two",
		route: "/FeatureTwo",
		ariaLabel: "Feature Two Link",
	},
];

const App = () => (
	<div className="App">
		<Header headerText={"Insert Header Here"} />
		<Navigation routes={routes} />
		<RoutesBlock />
	</div>
);

export default App;

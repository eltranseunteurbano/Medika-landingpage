import { ThemeProvider } from '@material-ui/styles';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import GlobalCss from './styles/GlobalCss';
import theme from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalCss />
			<NavBar />
			<Home />
		</ThemeProvider>
	);
}

export default App;

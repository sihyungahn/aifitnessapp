import * as React from 'react'
import {WebView} from 'react-native-webview';

export default class App extends React.Component {
	render() {
		return <WebView source ={{ url: 'https://aifitnesstrainer.net/'}} style={{marginTop: 20}} />;
	}
}
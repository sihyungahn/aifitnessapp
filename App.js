import * as Permissions from 'expo-permissions';

async function cameraStoragePermission(){
	const { status } = await Permissions.getAsync(
		Permission.CAMERA,
		Permissions.READ_EXTERNAL_STORAGE
	);
		if (status !=='grant'){
		alert('camera/album need authorization to use');
		}
}

componentDidMount(){
	this.cameraStoragePermission;
}

import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://aifitnesstrainer.net' }} style={{ marginTop: 20 }} />;
  }
}
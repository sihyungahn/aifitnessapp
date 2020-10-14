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

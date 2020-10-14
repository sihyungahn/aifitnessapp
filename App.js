@@ -4,11 +4,12 @@ async function cameraStoragePermission(){

const { status } = await Permissions.getAsync(
		Permission.CAMERA,
		Permissions.READ_EXTERNAL_STORAGE
		);
	);
		if (status !=='grant'){
		alert('camera/album need authorization to use');
		}
	}
}

componentDidMount(){
	this.cameraStoragePermission;
}
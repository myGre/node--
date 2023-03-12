function as(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		try {
			callback(null, arr[i]());

		} catch (error) {
			callback(error);
		}

	}
}

as([null, () => 1 + 2, null], function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
})
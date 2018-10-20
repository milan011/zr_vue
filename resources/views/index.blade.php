<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="cache-control" content="no-cache,no-store, must-revalidate" />
	<meta http-equiv="pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
    <title>Larvuent</title>
</head>
<body>
    <div id="app"></div>
	
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
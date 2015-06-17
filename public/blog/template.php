<!DOCTYPE HYML>
<html>	
	<head>
		<link rel="stylesheet" type="text/css" href="/css/normalize.css">
		<link rel="stylesheet" type="text/css" href="/css/blog.css">
		<link rel="stylesheet" type="text/css" href="/css/grids.css">
		<link href='http://fonts.googleapis.com/css?family=Cherry+Cream+Soda|Neucha' rel='stylesheet' type='text/css'>
		<title>Blog</title>
	</head>
	<body>
		<?php include 'header.php'; ?>
		<?php include 'navbar.php'; ?>
		<div>
		</div>
		<div class"container">
			<main>
				<?php require 'data.php' ?>
				<?php foreach ($posts as $post) {
					include 'post.php';
				} ?>
			</main>
		</div>
	</body>
</html>
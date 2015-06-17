<?php  
	$favorite = [
		'Monkeys',
		'English Bulldogs',
		'Reeses',
		'Orange Roses',
		'The Smell Of Horse Poop'
	]
?>

<!DOCTYPE HTML>
<html>
	<head>
		<style type="text/css">
			/*----------BORDER BOX----------*/
			html {
				box-sizing: border-box;
			}
			*, *:before, *:after {
				box-sizing: inherit;
			}

			/*----------ELEMENTS----------*/

			html,
			body {
				width: 100%;
				background-image: url(img/retina_wood.png);
			}

			table {
				margin: 0 auto;
				border: 1px solid black;
				font-size: 20px;
				height: 300px;
				border-radius: 20px;
				background-color: white;
				width: 300px;
				overflow: hidden;
				box-shadow: -20px 20px 40px #222;
			}

			td {
				text-align: center;
			}

			th {
				text-decoration: underline;
				font-size: 30px;
			}

			tr:nth-child(even) {
				background-color: #CCC;
			}

			tr:nth-child(odd) {
				background-color: #FFF;
			}
		</style>
		<title>My Favorite Things</title>
	</head>
	<body>
		<table>
			<th>My Favorite Things</th>
			<?php foreach ($favorite as $things): ?>
				<tr><td><?php echo $things; ?></td></tr>
			<?php endfor; ?>
		</table>
	</body>
</html>
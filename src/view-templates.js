const noteTemplate = (note) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<!-- <link rel="shortcut icon" href="orange-icon.PNG" type="image/x-icon" /> -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
			rel="stylesheet"
		/>
		<title>Orange Notes</title>
		<style>
			body {
				height: 100vh;
				width: 100vw;
				margin: 0 auto;
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: 'Roboto', sans-serif;
			}
			.card {
				min-width: 300px;
				border: 1px solid #fbd38d;
				padding: 0.8rem;
				border-radius: 8px;
				max-width: 420px;
				width: 100%;
				color: #262626;
			}
			h2 {
				font-weight: 500;
				font-size: 1.3rem;
			}
			pre {
				font-size: 1rem;
				padding-bottom: 0.4rem;
				white-space: pre-wrap;
				word-wrap: break-word;
				font-size: inherit;
				font-family: inherit;
				height: min-content;
			}
		</style>
	</head>
	<body style="background-color: #fafafa">
		<div class="card" style="background-color: ${note.color};">
			<h2>${note.title}</h2>
			<pre>${note.body}</pre>
		</div>
	</body>
</html>
`

module.exports = { noteTemplate }

const UnderConstruction = ({
	title = 'Em construção',
	description = 'Estamos preparando este conteúdo. Volte em breve!'
}) => {
	return (
		<main className="page-shell" aria-label="Página em construção">
			<div className="container">
				<div className="page-header">
					<h1>{title}</h1>
					<p className="subtitle">{description}</p>
				</div>
			</div>
		</main>
	);
};

export default UnderConstruction;

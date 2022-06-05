function Footer() {
	return (
		<footer className='page-footer teal darken-1'>
			<div className='footer-copyright'>
				<div className='container'>
					© {new Date().getUTCFullYear()} React Movies by Vitaly Undro
					<a className='grey-text text-lighten-4 right' href='#!'>
						Repo
					</a>
				</div>
			</div>
		</footer>
	);
}

export { Footer };

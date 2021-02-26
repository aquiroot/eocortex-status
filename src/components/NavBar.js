import React from 'react';

export const NavBar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid">
				<span className="navbar-brand">Navbar</span>
				<form className="d-flex">
					<input
						className="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button className="btn btn-outline-primary" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};

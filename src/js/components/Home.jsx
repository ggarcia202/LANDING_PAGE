import React from "react";

const Home = () => {
	const featuredArtworks = [
		{
			title: "Neon District",
			artist: "by Aurora H.",
			style: "Concept Art",
			image:
				"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
		},
		{
			title: "Forgotten Temple",
			artist: "by Mikael S.",
			style: "Environment",
			image:
				"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80"
		},
		{
			title: "Signal Runner",
			artist: "by Taro N.",
			style: "Character Design",
			image:
				"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
		},
		{
			title: "Afterlight City",
			artist: "by Lina K.",
			style: "Matte Painting",
			image:
				"https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80"
		},
		{
			title: "Crimson Beast",
			artist: "by Daniel R.",
			style: "Illustration",
			image:
				"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
		},
		{
			title: "Moon Harbor",
			artist: "by Clio M.",
			style: "3D Art",
			image:
				"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80"
		}
	];

	return (
		<div className="artstation-page">
			<header className="art-navbar">
				<div className="art-logo">GALLERY</div>
				<nav className="art-nav-links d-none d-md-flex">
					<a href="#">Explore</a>
					<a href="#">Artists</a>
				</nav>
			</header>

			<section className="hero container py-5">
				<p className="hero-tag">ARTE DIGITAL</p>
				<h1>El mejor lugar para descubrir arte digital</h1>
				<p className="hero-subtitle">
					Encuentra las mejores obras de arte digital, portafolios y talento de todo el mundo en nuestra plataforma. Únete a una comunidad global de artistas y creativos.
				</p>
			</section>

			<section className="container pb-4">
				<div className="section-head">
					<h2>Lo mejor ahora mismo</h2>
					<a href="#">+</a>
				</div>
				<div className="art-grid">
					{featuredArtworks.map((artwork, index) => (
						<article className="art-card" key={index}>
							<img src={artwork.image} alt={artwork.title} />
							<div className="art-overlay">
								<span className="art-style">{artwork.style}</span>
								<h3>{artwork.title}</h3>
								<p>{artwork.artist}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="container categories pb-5">
				<div className="section-head">
					<h2>Busca por categoria</h2>
				</div>
				<div className="category-list">
					<span>Concept Art</span>
					<span>Illustration</span>
					<span>3D Modeling</span>
					<span>Animation</span>
					<span>Environment</span>
				</div>
			</section>

			<footer className="art-footer">
				<p>© 2026 Artflow. Built for creative portfolios.</p>
			</footer>
		</div>
	);
};

export default Home;

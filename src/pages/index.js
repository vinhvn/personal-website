import React, { Component } from 'react';
import { Link } from 'gatsby';
import Typed from 'typed.js';
import Navbar from '../components/Navbar';

class App extends Component {
	componentDidMount() {
		let options = {
			strings: [
				'Vinh',
				'a programmer',
				'a student',
				'always learning',
				'playing my bass',
				'practicing japanese',
				'making games',
				'designing websites',
			],
			typeSpeed: 100,
			startDelay: 50,
			backSpeed: 50,
			backDelay: 1000,
			loop: true,
		};
		this.typed = new Typed(this.elem, options);
	}

	componentWillUnmount() {
		// prevent mem leaks
		this.typed.destroy();
	}

	render() {
		return (
			<div className='root'>
				<Navbar />

				<header className='masthead bg-2'>
					<div className='container h-100'>
						<div className='row h-100 align-items-center'>
							<div className='col-12 text-center'>
								<img
									className={'intro-img'}
									src='/img/me.jpg'
									alt='me'
								/>
								<h4 className={'text-light'}>
									Hi, I'm{' '}
									<span
										ref={elem => {
											this.elem = elem;
										}}
									/>
								</h4>
								<p className={'lead text-light'}>
									Welcome to my website!
								</p>
							</div>
						</div>
					</div>
				</header>

				<section id={'about'} className='page-section bg-3'>
					<div className='container section-content'>
						<div className='row'>
							<div className='col-lg mx-auto'>
								<h2 className='section-header text-light'>
									<i className='fa fa-hand-o-right' /> About
									Me
								</h2>
								<hr className={'divider'} />
								<p className={'lead text-light'}>
									Hi, I'm Vinh Nguyen! I'm an aspiring
									software developer currently pursuing a a
									Computer Science degree at Carleton
									University. I enjoy web development,
									especially on the front-end and spend most
									of my free time making fun little apps and
									learning new technologies.
								</p>
							</div>
							<div className='col-lg mx-auto'>
								<ul className='list-inline d-flex justify-content-around socials'>
									<li className='list-inline-item'>
										<a
											href='https://www.linkedin.com/in/vinhvn/'
											className={
												'btn btn-outline-light btn-xl'
											}
										>
											<i className='fa fa-linkedin' />
										</a>
									</li>
									<li className='list-inline-item'>
										<a
											href='https://www.github.com/vinhvn/'
											className={
												'btn btn-outline-light btn-xl'
											}
										>
											<i className='fa fa-github' />
										</a>
									</li>
									<li className='list-inline-item'>
										<a
											href='https://leetcode.com/vinhvn/'
											className={
												'btn btn-outline-light btn-xl'
											}
										>
											<i className='fa fa-terminal' />
										</a>
									</li>
								</ul>
								<ul className='list-inline d-flex justify-content-around socials'>
									<li className='list-inline-item'>
										<a
											href='https://open.spotify.com/user/tjplab770o3f0ig61a2n3il5x'
											className={
												'btn btn-outline-light btn-xl'
											}
										>
											<i className='fa fa-spotify' />
										</a>
									</li>
									<li className='list-inline-item'>
										<a
											href='https://twitch.tv/vinhtea'
											className={
												'btn btn-outline-light btn-xl'
											}
										>
											<i className='fa fa-twitch' />
										</a>
									</li>
									<li className='list-inline-item'>
										<a
											href='https://www.instagram.com/therealvinh/'
											className={
												'btn btn-outline-light btn-xl'
											}
										>
											<i className='fa fa-instagram' />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section id={'experience'} className='page-section bg-4'>
					<div className='container section-content'>
						<div className='row'>
							<div className='col-lg mx-auto'>
								<h2 className='section-header text-dark'>
									<i className='fa fa-map-marker' /> Fall 2020
								</h2>
								<hr className={'divider'} />
								<p className={'lead text-dark'}>
									I will be doing an internship as a Software
									Developer focused on Web Development at{' '}
									<a
										href={'https://workshopx.com/'}
										className={
											'font-weight-bold text-dark text-decoration-none'
										}
									>
										Workshop X / CanvasPop
									</a>{' '}
									this coming fall.
								</p>
							</div>
							<div className='col-lg mx-auto mt-4 text-center'>
								<img
									src='/img/workshopx.png'
									alt='carleton'
									className={'img-fluid'}
								/>
							</div>
						</div>
					</div>
				</section>

				<section className='page-section bg-2'>
					<div className='container section-content'>
						<div className='row'>
							<div className='col-lg mx-auto'>
								<h2 className='section-header text-light'>
									<i className='fa fa-map-marker' /> Summer
									2020
								</h2>
								<hr className={'divider'} />
								<p className={'lead text-light'}>
									I will be working as a software developer
									CO-OP intern at{' '}
									<a
										href={
											'https://https://www.inspection.gc.ca/eng/1297964599443/1297965645317/'
										}
										className={
											'font-weight-bold text-light text-decoration-none'
										}
									>
										Canadian Food Inspection Agency
									</a>{' '}
									this summer.
								</p>
							</div>
							<div className='col-lg mx-auto mt-4'>
								<img
									src='/img/cfia.jpg'
									alt='carleton'
									className={'img-fluid'}
								/>
							</div>
						</div>
					</div>
				</section>

				<section className='page-section bg-3'>
					<div className='container section-content'>
						<div className='row'>
							<div className='col-lg mx-auto'>
								<h2 className='section-header text-light'>
									<i className='fa fa-map-marker' /> Fall 2019
								</h2>
								<h2 className='section-header text-light'>
									& Winter 2020
								</h2>
								<hr className={'divider'} />
								<p className={'lead text-light'}>
									I worked as a Computer Science Teaching
									Assistant at Carleton University whilst
									continuing my studies. I marked student
									assignments and midterms, and provided
									after-class help during office hours. I held
									workshops to assist students with completing
									assignments and developed a problem which
									was used in the final exam.
								</p>
							</div>
							<div className='col-lg mx-auto mt-4'>
								<img
									src='/img/scs-carleton.png'
									alt='carleton'
									className={'img-fluid'}
								/>
							</div>
						</div>
					</div>
				</section>

				<section id={'academics'} className='page-section bg-4'>
					<div className='container section-content'>
						<div className='row'>
							<div className='col-lg mx-auto'>
								<h2 className='section-header text-dark'>
									<i className='fa fa-graduation-cap' />{' '}
									Academics
								</h2>
								<hr className={'divider'} />
								<p className={'lead text-dark'}>
									I am currently a third-year undergraduate,
									pursuing a Bachelor's in Computer Science at
									Carleton University in Ottawa, Canada.
								</p>
								<div className='card-header text-white bg-1'>
									Highlights
								</div>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item bg-4'>
										Minor in Japanese
									</li>
									<li className='list-group-item bg-4'>
										Recipient of Faculty Scholarship
									</li>
									<li className='list-group-item bg-4'>
										Recipient of Goldie Wilkinson Award
									</li>
									<li className='list-group-item bg-4'>
										Overall CGPA of 11.86/12.0
									</li>
								</ul>
							</div>
							<div className='col-lg mx-auto mt-4'>
								<img
									src='/img/carleton.png'
									alt='carleton'
									className={'img-fluid'}
								/>
							</div>
						</div>
					</div>
				</section>

				<section className='page-section bg-2'>
					<div className='container section-content'>
						<div className='row'>
							<div className='col-lg mx-auto'>
								<h2 className='section-header text-light'>
									<i className='fa fa-laptop' /> Projects
								</h2>
								<hr className={'divider'} />
								<p className={'lead text-light'}>
									I have a bunch of cool projects I've worked
									on during school, hackathons, and whenever I
									have the spare time. <br />
									<br />
									Feel free to check them out{' '}
									<Link
										to={'/projects'}
										className={'text-white'}
									>
										here{'  '}
										<i className={'fa fa-mouse-pointer'} />
									</Link>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import { Link, withPrefix } from 'gatsby';
import Helmet from 'react-helmet';
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
				'playing bass guitar',
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
				<Helmet>
					{/*<link rel={withPrefix('css/bootstrap.min.css')} type={'stylesheet'} />*/}
					{/*<link rel={withPrefix('css/index.css')} type={'stylesheet'} />*/}
					<meta
						property='og:image'
						content={withPrefix('img/website.png')}
					/>
					<meta property='og:image:type' content='image/png' />
					<meta property='og:image:width' content='1204' />
					<meta property='og:image:height' content='894' />
					<script
						src={withPrefix('js/bootstrap.min.js')}
						type={'stylesheet'}
					/>
					<script
						src={withPrefix('js/jquery-3.5.1.min.js')}
						type={'stylesheet'}
					/>
					<script
						src={withPrefix('js/popper.min.js')}
						type={'stylesheet'}
					/>
					<script
						src={withPrefix('js/typed.min.js')}
						type={'stylesheet'}
					/>
				</Helmet>
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
								<h1
									className={'text-light'}
									style={{ 'font-size': '4em' }}
								>
									Hi, I'm{' '}
									<span
										ref={elem => {
											this.elem = elem;
										}}
									/>
								</h1>
								<p
									className={'lead text-light'}
									style={{ 'font-size': '2em' }}
								>
									Welcome to my website!
								</p>
							</div>
						</div>
					</div>
				</header>

				<section id={'about'} className='page-section about bg-3'>
					<div className='container section-content'>
						<div className='row'>
							<div className='col-lg ml-auto'>
								<h2 className='section-header text-light'>
									<i className='fa fa-hand-o-right' /> About
									Me
								</h2>
								<hr className={'divider'} />
								<p className={'lead text-light text-justify'}>
									Hi, I'm Vinh Nguyen! I'm an aspiring
									software developer currently pursuing a a
									Computer Science degree at Carleton
									University. I enjoy web, front-end
									development and spend most of my free time
									practicing and learning new things.
								</p>
							</div>
							<div className='col-lg mr-auto'>
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

				<section id={'experience'} className='page-section about bg-4'>
					<div className='container section-content'>
						<div className='row'>
							<div className='col-lg mr-auto text-center'>
								<img
									src='/img/workshopx.png'
									alt='carleton'
									className={'img-fluid'}
								/>
							</div>
							<div className='col-lg ml-auto'>
								<h2 className='section-header text-dark text-right'>
									Fall 2020{' '}
									<i className='fa fa-paint-brush' />
								</h2>
								<hr className={'divider'} />
								<p className={'lead text-dark text-justify'}>
									I will be doing a software development
									internship at WorkshopX this coming fall.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className='page-section about bg-2'>
					<div className='container section-content'>
						<div className='row'>
							<div className='col-lg ml-auto'>
								<h2 className='section-header text-light'>
									<i className='fa fa-code' /> Summer 2020
								</h2>
								<hr className={'divider'} />
								<p className={'lead text-light text-justify'}>
									I will be working as a software developer
									intern at Canadian Food Inspection Agency
									this summer.
								</p>
							</div>
							<div className='col-lg mr-auto'>
								<img
									src='/img/cfia.jpg'
									alt='carleton'
									className={'img-fluid'}
								/>
							</div>
						</div>
					</div>
				</section>

				<section className='page-section about bg-3'>
					<div className='container section-content'>
						<div className='row'>
							<div className='col-lg ml-auto'>
								<img
									src='/img/scs-carleton.png'
									alt='carleton'
									className={'img-fluid'}
								/>
							</div>
							<div className='col-lg mr-auto'>
								<h2 className='section-header text-light text-right'>
									Fall 2019 & Winter 2020{' '}
									<i className='fa fa-pencil' />
								</h2>
								<hr className={'divider'} />
								<p className={'lead text-light text-justify'}>
									I worked as a Computer Science Teaching
									Assistant at Carleton University whilst
									continuing my studies as a student. I marked
									student assignments and midterms, and
									provided after-class help during office
									hours. I developed a problem which was used
									in the final exam and held workshops to
									assist students with completing assignments.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id={'academics'} className='page-section about bg-4'>
					<div className='container section-content'>
						<div className='row'>
							<div className='col-lg mr-auto'>
								<h2 className='section-header text-dark'>
									<i className='fa fa-graduation-cap' />{' '}
									Academics
								</h2>
								<hr className={'divider'} />
								<p className={'lead text-dark text-justify'}>
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
							<div className='col-lg ml-auto'>
								<img
									src='/img/carleton.png'
									alt='carleton'
									className={'img-fluid'}
								/>
							</div>
						</div>
					</div>
				</section>

				<section className='page-section about bg-2'>
					<div className='container section-content'>
						<div className='row'>
							<div className='col-lg mr-auto'>
								<h2 className='section-header text-light'>
									<i className='fa fa-laptop' /> Projects
								</h2>
								<hr className={'divider'} />
								<p className={'lead text-light text-justify'}>
									I have a bunch of cool projects I've worked
									on during school, hackathons, and whenever I
									have the spare time. <br />
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

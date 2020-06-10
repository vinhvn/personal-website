import React from 'react';
import Navbar from '../components/Navbar';

const Projects = () => {
	return (
		<div className={'root'}>
			<Navbar />

			<header className='masthead bg-3'>
				<div className='container h-100'>
					<div className='row h-100 align-items-center'>
						<div className='col-12 text-center'>
							<i
								className={'text-light fa fa-heart'}
								style={{ 'font-size': '15vw' }}
							/>
							<h1 className={'text-light'}>Projects</h1>
						</div>
					</div>
				</div>
			</header>

			<section className='page-section bg-1'>
				<div className='container section-content'>
					<div className='row'>
						<div className='col-lg mx-auto'>
							<h2 className='section-header text-light'>
								vinhnguyen.ca
							</h2>
							<hr className={'divider'} />
							<ul className='list-inline'>
								<li className='list-inline-item'>
									<a
										href='https://www.github.com/vinhvn/personal-website'
										className={
											'btn btn-outline-light btn-lg'
										}
									>
										<i className='fa fa-github' /> github
									</a>
								</li>
								<li className='list-inline-item'>
									<a
										href='https://vinhnguyen.ca/'
										className={
											'btn btn-outline-light btn-lg'
										}
									>
										<i className='fa fa-cloud' /> live
									</a>
								</li>
							</ul>
							<hr className={'divider'} />
							<p className={'lead text-light'}>
								My personal portfolio website, created to show
								my love of design
							</p>
							<div className='card-header text-light bg-1'>
								Implemented using...
							</div>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item list-group-item-dark'>
									React
								</li>
								<li className='list-group-item list-group-item-dark'>
									Gatsby
								</li>
							</ul>
						</div>
						<div className='col-lg mx-auto mt-4'>
							<img
								src='/img/website.png'
								alt='carleton'
								className={'img-fluid'}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='page-section bg-light'>
				<div className='container section-content'>
					<div className='row'>
						<div className='col-lg mx-auto'>
							<h2 className='section-header text-dark'>
								devCloud
							</h2>
							<hr className={'divider'} />
							<ul className='list-inline'>
								<li className='list-inline-item'>
									<a
										href='https://www.github.com/vinhvn/devcloud'
										className={
											'btn btn-outline-dark btn-lg'
										}
									>
										<i className='fa fa-github' /> github
									</a>
								</li>
								<li className='list-inline-item'>
									<a
										href='https://devcloud.vinhnguyen.ca/'
										className={
											'btn btn-outline-dark btn-lg'
										}
									>
										<i className='fa fa-cloud' /> live
									</a>
								</li>
							</ul>
							<hr className={'divider'} />
							<p className={'lead text-dark'}>
								A small website where users can register and
								login to post and share their own projects with
								others.
							</p>
							<div className='card-header text-dark bg-light'>
								Implemented using...
							</div>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item list-group-item-light'>
									React, React-Router
								</li>
								<li className='list-group-item list-group-item-light'>
									Redux, Redux-Thunk
								</li>
								<li className='list-group-item list-group-item-light'>
									Firebase Auth, Firestore, and Cloud
									Functions
								</li>
								<li className='list-group-item list-group-item-light'>
									Moment
								</li>
							</ul>
						</div>
						<div className='col-lg mx-auto mt-4'>
							<img
								src='/img/devcloud.png'
								alt='carleton'
								className={'img-fluid'}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='page-section bg-1'>
				<div className='container section-content'>
					<div className='row'>
						<div className='col-lg mx-auto'>
							<h2 className='section-header text-light'>
								{'Todo'}
							</h2>
							<hr className={'divider'} />
							<ul className='list-inline'>
								<li className='list-inline-item'>
									<a
										href='https://www.github.com/vinhvn/todo-app'
										className={
											'btn btn-outline-light btn-lg'
										}
									>
										<i className='fa fa-github' /> github
									</a>
								</li>
								<li className='list-inline-item'>
									<a
										href='https://todo.vinhnguyen.ca/'
										className={
											'btn btn-outline-light btn-lg'
										}
									>
										<i className='fa fa-cloud' /> live
									</a>
								</li>
							</ul>
							<hr className={'divider'} />
							<p className={'lead text-light'}>
								A super simple "todo-list" app to learn React
								and how single page applications function.
							</p>
							<div className='card-header text-light bg-1'>
								Implemented using...
							</div>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item list-group-item-dark'>
									React
								</li>
							</ul>
						</div>
						<div className='col-lg mx-auto mt-4'>
							<img
								src='/img/todo.png'
								alt='carleton'
								className={'img-fluid'}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Projects;

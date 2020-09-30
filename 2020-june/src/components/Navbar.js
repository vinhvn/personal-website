import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark fixed-top bg-1'>
			<div className='container'>
				<Link to={'/'} className={'navbar-brand'}>
					Vinh Nguyen
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#mobileNav'
					aria-controls='mobileNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='mobileNav'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<Link to={'/'} className={'nav-link'}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to={'#about'} className={'nav-link'}>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link to={'#experience'} className={'nav-link'}>
								Experience
							</Link>
						</li>
						<li className='nav-item'>
							<Link to={'#academics'} className={'nav-link'}>
								Academics
							</Link>
						</li>
						<li className='nav-item'>
							<Link to={'/projects'} className={'nav-link'}>
								Projects
							</Link>
						</li>
						<li className='nav-item'>
							<a
								href={'/nguyen-vinh_resume.pdf'}
								className={'nav-link'}
							>
								Resume
							</a>
						</li>
						<li className='nav-item'>
							<a
								href={'mailto:me@vinhnguyen.ca'}
								className={'nav-link'}
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

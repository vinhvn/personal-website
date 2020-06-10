import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet='utf-8' />
				<meta httpEquiv='x-ua-compatible' content='ie=edge' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>
				<meta
					name='description'
					content="Vinh Nguyen's Personal Website"
				/>
				<meta property='og:image' content={'img/website.png'} />
				<meta property='og:image:type' content='image/png' />
				<meta property='og:image:width' content='1204' />
				<meta property='og:image:height' content='894' />
				{props.headComponents}
				<title>Vinh Nguyen</title>
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<div
					key={`body`}
					id='___gatsby'
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
				{props.postBodyComponents}
				<script
					src={withPrefix('js/jquery-3.5.1.min.js')}
					type={'text/javascript'}
				/>
				<script
					src={withPrefix('js/popper.min.js')}
					type={'text/javascript'}
				/>
				<script
					src={withPrefix('js/bootstrap.min.js')}
					type={'text/javascript'}
				/>
				<script
					src={withPrefix('js/typed.min.js')}
					type={'text/javascript'}
				/>
			</body>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
};

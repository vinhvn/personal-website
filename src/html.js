import React from 'react';
import PropTypes from 'prop-types';

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
				{props.headComponents}
				<link rel='stylesheet' href='css/bootstrap.min.css' />
				<link rel='stylesheet' href='css/index.css' />
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
				<script src='js/jquery-3.5.1.min.js' />
				<script src='js/popper.min.js' />
				<script src='js/bootstrap.min.js' />
				<script src='js/typed.min.js' />
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

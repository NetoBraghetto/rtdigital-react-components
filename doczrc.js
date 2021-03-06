import { css } from 'docz-plugin-css';

export default {
    files: './src/js/**/*.md',
	htmlContext: {
		head: {
			links: [
				{
					rel: 'stylesheet',
					href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
				},
			],
		},
	},
    plugins: [
        css({
            preprocessor: 'sass'
        })
    ],
	themeConfig: {},
};

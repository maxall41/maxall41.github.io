import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'main',
		repo: 'https://github.com/maxall41/maxall41.github.io.git', // Update to point to your repository
		user: {
			name: 'Max Campbell', // update to use your name
			email: 'maxall4@protonmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);

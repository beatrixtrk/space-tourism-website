import { Image, Link } from '@nextui-org/react';

const Logo = ({ style }) => {
	return (
		<Link className={`${style}`} href="/" aria-label="Home Page">
			<Image
				src="/shared/logo.svg"
				width={48}
				height={48}
				alt=""
				className="opacity-1"
			></Image>
		</Link>
	);
};

export default Logo;

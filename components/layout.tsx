type componentProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: componentProps) {
	return <div className='container'>{children}</div>;
}

import Link from 'next/link';
import WorkCard from '../../components/WorkCard';

const Work = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
			<div className="flex flex-col justify-between">
				<div>
					<Link href="/">
						<h1 className="">Trabalho</h1>
					</Link>
				</div>
				<div className="flex flex-col gap-2">
					<Link href="/" className="text-6xl w-max">
						Inicio
					</Link>
					<Link href="/about" className="text-6xl w-max ">
						Sobre
					</Link>
					<Link href="/contact" className="text-6xl w-max">
						Contato
					</Link>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<WorkCard link="/work/test1" />
				<WorkCard link="/work/test2" />
				<WorkCard link="/work/test3" />
				<WorkCard link="/work/test4" />
			</div>
		</div>
	);
};

export default Work;
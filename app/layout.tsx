import { Exo } from '@next/font/google';
import BackgroundAnimation from '../components/BackgroundAnimation';
import NoiseFilter from '../components/NoiseFilter';
import ToggleTheme from '../components/ToggleTheme';
import '../styles/index.scss';

export const revalidate = 3600;

const font = Exo();

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<html className={`${font.className} dark`}>
				<body className="flex flex-col justify-start min-h-full px-9">
					<div className="flex justify-end h-10">
						<ToggleTheme />
					</div>
					<BackgroundAnimation />
					<main className="h-full backdrop-blur-3xl lg:backdrop-blur-[80px] backdrop-brightness-[1.15] dark:backdrop-brightness-50 scrollbar overflow-y-scroll border rounded-md p-10 border-zinc-500/50">
						{/* <AnimatePresence mode="wait">{children}</AnimatePresence> */}
						{children}
					</main>
					<footer className="py-2 mt-auto text-sm font-normal text-center select-none opacity-90">
						Designed and coded by Gildson Alves © 2022 (W.I.P.)
					</footer>
					<NoiseFilter />
				</body>
			</html>
		</>
	);
}

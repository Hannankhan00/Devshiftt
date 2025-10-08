import { redirect } from 'next/navigation';

export const metadata = {
    title: "Devshift",
    description: "Professional web development, design, and digital marketing services",
};

export default function HomePage() {
    redirect('/home');
}
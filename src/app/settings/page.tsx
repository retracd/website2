import ThemeSwitcher from '@/components/ThemeSwitcher';

export const metadata = {
    title: "settings",
};

export default function Settings() {
    return (
        <div className="flex flex-col justify-center items-center px-6 py-6">
            <div className="w-full max-w-[800px]">
                {/* Header */}
                <h1 className="text-5xl font-bold">settings</h1>
                <hr className="border-navy dark:border-cream border-2 mb-12" />

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">theme</h2>
                    <div className="pl-6 space-x-8 text-xl">
                        <ThemeSwitcher />
                    </div>
                </section>
            </div>
        </div>
    );
}

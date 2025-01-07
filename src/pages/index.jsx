import { useState } from "react";

import { ROUTES } from "src/constants/routes";

import MainLayout from "src/layouts/MainLayout";
import Button from "src/components/Button";

import { ConnectKitButton } from "connectkit";
import WelcomeModal from "src/components/Modal/WelcomeModal";
// import { useTranslation } from 'next-i18next';

export default function Page() {
  // const { t } = useTranslation('pages.index');

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <MainLayout>
      <div className="container m-auto flex flex-col items-center gap-5 py-10 text-center">
        {/* <h1 className='text-2xl font-bold'>{t('title')}</h1> */}
        <h1 className="text-2xl font-bold">Gaply Frontend Boilerplate</h1>
        <h2 className="mb-12 font-madeEvolveSans text-xl font-bold">
          Landing Page
        </h2>
        <Button onClick={() => setIsModalOpen(true)}>Welcome</Button>
        <div className="flex items-center gap-4">
          <Button href={ROUTES.auth.login}>Login</Button>
          <Button href={ROUTES.auth.register}>Register</Button>
        </div>
        <Button href={ROUTES.public.aboutUs}>About Us</Button>
        <Button href={ROUTES.private.dashboard}>Dashboard (Private)</Button>
        <ConnectKitButton />
      </div>

      <WelcomeModal
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
    </MainLayout>
  );
}

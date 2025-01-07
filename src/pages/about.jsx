import { PROFILES } from "src/constants";

import MainLayout from "src/layouts/MainLayout";
import ProfileCard from "src/components/Card/ProfileCard";

export default function Page() {
  return (
    <MainLayout title="About Us">
      <div className="container m-auto flex flex-col items-center gap-10 py-10">
        <h1 className="text-2xl font-bold">Gaply Frontend Boilerplate</h1>
        <h2 className="font-madeEvolveSans text-xl font-bold">About Us Page</h2>
        <div className="grid grid-cols-2 gap-5">
          {PROFILES.map((item, index) => (
            <ProfileCard key={index} item={item} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

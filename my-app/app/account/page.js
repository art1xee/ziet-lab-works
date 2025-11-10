export const metadata = {
  title: "Guest Area",
};

export default function AccountPage() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Welcome to your guest area
      </h1>
      <p className="text-lg text-primary-200">
        Here you can manage your reservations and update your profile.
      </p>
    </div>
  );
}

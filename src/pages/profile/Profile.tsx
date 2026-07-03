import { useAuth } from "../../features/auth/auth.context";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={user.image}
            alt={user.firstName}
            className="w-36 h-36 rounded-full border-4 border-blue-500"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-bold">
              {user.firstName} {user.lastName}
            </h1>

            <div className="mt-6 space-y-3">
              <p>
                <span className="font-semibold">👤 Username:</span>{" "}
                {user.username}
              </p>

              <p>
                <span className="font-semibold">📧 Email:</span> {user.email}
              </p>

              <p>
                <span className="font-semibold">🆔 User ID:</span> {user.id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

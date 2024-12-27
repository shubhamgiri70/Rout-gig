import { Link, Outlet } from "react-router-dom";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="profilesPage">
      <div className="all-profiles">
        {profiles.map((profile) => (
          <Link key={profile} to={`/profiles/${profile}`}>
            Profile {profile}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default ProfilesPage;

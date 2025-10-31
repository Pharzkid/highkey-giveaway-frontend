export default function UserInfo({ user }) {
    return (
      <div className="bg-gray-50 p-4 rounded-2xl shadow">
        <h4 className="text-sm font-semibold text-hkgold mb-2">User Information</h4>
        <div className="text-sm text-gray-700">
          <div><strong>Name:</strong> {user?.fullName}</div>
          <div><strong>Phone:</strong> {user?.phone}</div>
          <div><strong>Email:</strong> {user?.email}</div>
        </div>
      </div>
    );
  }
  
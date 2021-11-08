const UserCard = () => {
  return (
    <div className="flex items-center">
      <div className="text-gray-700 text-right mr-2">
        <div className="font-bold">ana_unsplash</div>
        <div>Ana Unsplash</div>
      </div>
      <div>
        <div className="rounded-full max-h-12 w-12 overflow-hidden">
          <img
            alt="Foto de perfil de Ana"
            src="https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3584&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;

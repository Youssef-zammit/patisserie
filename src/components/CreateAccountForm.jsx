import { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

const CreateAccountForm = ({ isAdmin }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "cashier", // default if shown
  });
    const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    // Ici, vous pouvez envoyer les données à Supabase ou une API
    console.log("Données du compte:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4 border rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-center">Créer un compte</h2>

      <div>
        <label className="block mb-1">Nom complet</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      {isAdmin && (
        <div>
          <label className="block mb-1">Rôle</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="cashier">Caissier</option>
            <option value="chef">Chef</option>
          </select>
        </div>
      )}

      <div>
        <label className="block mb-1">password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Confirm your password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
      >
        create account
      </button>
    
    <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            already have an account ?{" "}
            <a href="/signin" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Se connecter
            </a>
          </p>
        </div>
        </form>
  );
};

export default CreateAccountForm;

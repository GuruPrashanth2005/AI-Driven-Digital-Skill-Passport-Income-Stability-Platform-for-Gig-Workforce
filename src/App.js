import React from "react";
import workersImg from "./workers.jpg";

const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-2xl shadow-md hover:scale-105 transition ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
    {children}
  </div>
);

const ProgressBar = ({ value }) => (
  <div className="w-full bg-gray-200 rounded-full h-3">
    <div
      className="bg-green-500 h-3 rounded-full"
      style={{ width: `${value}%` }}
    />
  </div>
);

const Navbar = ({ onLogout }) => (
  <div className="flex justify-between items-center p-4 shadow-md bg-white">
    <h1 className="text-xl font-bold text-blue-600">SkillAI</h1>
    <Button onClick={onLogout} className="bg-gray-700 text-white">
      Logout
    </Button>
  </div>
);

const Landing = () => (
  <div className="p-8 text-center">
    <h1 className="text-4xl font-bold mb-4">
      Empowering Gig Workers with AI &amp; Safety
    </h1>
    <p className="text-gray-600 mb-6">
      Smart platform for skills, wages, and safety
    </p>

    <div className="space-x-4">
      <Button className="bg-blue-500 text-white">Find Work</Button>
      <Button className="bg-orange-500 text-white">Hire Workers</Button>
    </div>

    <div className="grid md:grid-cols-3 gap-4 mt-10">
      <Card>AI Skill Verification</Card>
      <Card>Fair Wage Prediction</Card>
      <Card>Safety Monitoring</Card>
    </div>
  </div>
);

const WorkerDashboard = () => (
  <div className="p-6 space-y-6">
    <h2 className="text-2xl font-bold">Welcome, Yash 👋</h2>

    <Card>
      <h3>Earnings</h3>
      <p className="text-2xl font-bold">₹12,500</p>
    </Card>

    <Card>
      <h3>Skill Score</h3>
      <ProgressBar value={80} />
    </Card>

    <Card>
      <h3>Nearby Jobs</h3>
      <ul>
        <li>Electric Repair - 2km - ₹500</li>
        <li>AC Service - 5km - ₹1200</li>
      </ul>
    </Card>
  </div>
);

const CustomerDashboard = () => (
  <div className="p-6">
    <input
      className="w-full p-3 border rounded-xl mb-4"
      placeholder="Find electrician near me"
    />

    <div className="grid md:grid-cols-2 gap-4">
      <Card>
        <h3>Raj Electrician</h3>
        <p>⭐ 4.5 | Skill 85%</p>
        <p>₹500/job</p>
        <Button className="bg-green-500 text-white mt-2">Hire</Button>
      </Card>
    </div>
  </div>
);

const Profile = () => (
  <div className="p-6 space-y-4">
    <Card>
      <h2 className="text-xl font-bold">Raj Kumar</h2>
      <p className="text-green-500">Verified ✔</p>
      <ProgressBar value={85} />
    </Card>

    <Card>
      <h3>Work History</h3>
      <p>50+ Jobs Completed</p>
    </Card>

    <Card>
      <h3>Reviews</h3>
      <p>"Great work!" ⭐⭐⭐⭐⭐</p>
    </Card>
  </div>
);

const Safety = () => (
  <div className="p-6 space-y-6">
    <Card>
      <h3>Heart Rate</h3>
      <p className="text-2xl">78 BPM</p>
    </Card>

    <Card>
      <h3>Location</h3>
      <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center">
        Map Placeholder
      </div>
    </Card>

    <Button className="bg-red-500 text-white w-full py-3 text-lg">SOS</Button>
  </div>
);

const Auth = ({ onLogin }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() !== "") {
      onLogin();
    } else {
      alert("Please enter an email");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
        `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${workersImg})`,
      }}
    >
      <div className="bg-white/85 backdrop-blur-md p-8 rounded-2xl shadow-xl w-80">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-2 border mb-3 rounded"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full p-2 border mb-4 rounded"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" className="bg-blue-500 text-white w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar onLogout={handleLogout} />
      <Landing />
      <WorkerDashboard />
      <CustomerDashboard />
      <Profile />
      <Safety />
    </div>
  );
}
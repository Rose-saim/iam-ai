import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import RegisterBusiness from './pages/auth/RegisterBusiness';
import RegisterIndividual from './pages/auth/RegisterIndividual';
import RegisterExpert from './pages/auth/RegisterExpert';
import Login from './pages/auth/Login';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import Dashboard from './pages/Dashboard';
import ExpertMissions from './pages/expert/ExpertMissions';
import ExpertTrainings from './pages/expert/ExpertTrainings';
import ExpertCalendar from './pages/expert/ExpertCalendar';
import ExpertAnalytics from './pages/expert/ExpertAnalytics';
import ExpertMessaging from './pages/expert/ExpertMessaging';
import ExpertProfile from './pages/expert/ExpertProfile';
import ExpertFinance from './pages/expert/ExpertFinance';
import ExpertSupport from './pages/expert/ExpertSupport';
import ExpertSettings from './pages/expert/ExpertSettings';
import ExpertReports from './pages/expert/ExpertReports';
import ExpertFeedback from './pages/expert/ExpertFeedback';
import ExpertCommunity from './pages/expert/ExpertCommunity';

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/register-business" element={<RegisterBusiness />} />
        <Route path="/register-individual" element={<RegisterIndividual />} />
        <Route path="/register-expert" element={<RegisterExpert />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Expert Routes */}
        <Route path="/expert/missions" element={<ExpertMissions />} />
        <Route path="/expert/trainings" element={<ExpertTrainings />} />
        <Route path="/expert/calendar" element={<ExpertCalendar />} />
        <Route path="/expert/analytics" element={<ExpertAnalytics />} />
        <Route path="/expert/messaging" element={<ExpertMessaging />} />
        <Route path="/expert/profile" element={<ExpertProfile />} />
        <Route path="/expert/finance" element={<ExpertFinance />} />
        <Route path="/expert/support" element={<ExpertSupport />} />
        <Route path="/expert/settings" element={<ExpertSettings />} />
        <Route path="/expert/reports" element={<ExpertReports />} />
        <Route path="/expert/feedback" element={<ExpertFeedback />} />
        <Route path="/expert/community" element={<ExpertCommunity />} />
      </Routes>
    </Layout>
  );
}
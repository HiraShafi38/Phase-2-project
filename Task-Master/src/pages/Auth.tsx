
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get mode from URL query parameter
  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get("mode") || "login";
  
  const handleAuthSuccess = () => {
    // In a real app, we'd check if the user is authenticated
    // For now, we'll just redirect to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Left side (branding) */}
      <div className="sm:w-1/2 bg-todo-primary/10 flex flex-col justify-center items-center p-6 sm:p-10">
        <Link to="/" className="mb-8 self-start">
          <Button variant="ghost" className="text-todo-primary">
            ← Back to home
          </Button>
        </Link>
        
        <div className="max-w-md mx-auto text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-todo-primary mb-6">
            TaskMaster
          </h1>
          <p className="text-lg mb-6 text-foreground/80">
            The simple task management app that helps you stay organized and boost your productivity.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-4 border mb-6">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-todo-success" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Create and organize tasks</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-todo-success" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Set priorities and deadlines</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-todo-success" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Track progress and productivity</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side (form) */}
      <div className="sm:w-1/2 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <div className="bg-background border rounded-lg p-1 inline-flex">
              <Link 
                to="/auth?mode=login" 
                className={`px-4 py-2 rounded-md ${mode === "login" ? "bg-todo-primary text-white" : ""}`}
              >
                Log In
              </Link>
              <Link 
                to="/auth?mode=register" 
                className={`px-4 py-2 rounded-md ${mode === "register" ? "bg-todo-primary text-white" : ""}`}
              >
                Register
              </Link>
            </div>
          </div>
          
          {mode === "login" ? (
            <LoginForm onSuccess={handleAuthSuccess} />
          ) : (
            <RegisterForm onSuccess={handleAuthSuccess} />
          )}
          
          {mode === "login" ? (
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/auth?mode=register" className="text-todo-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          ) : (
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/auth?mode=login" className="text-todo-primary hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;

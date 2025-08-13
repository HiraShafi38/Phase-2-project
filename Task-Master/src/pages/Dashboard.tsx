
import React, { useState } from "react";
import TaskForm from "@/components/tasks/TaskForm";
import TaskList from "@/components/tasks/TaskList";
import { useTaskContext } from "@/context/TaskContext";
import Sidebar from "@/components/layout/Sidebar";

const Dashboard = () => {
  const { tasks } = useTaskContext();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Calculate task completion stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const completionPercentage = totalTasks > 0 
    ? Math.round((completedTasks / totalTasks) * 100) 
    : 0;

  return (
    <div className="flex flex-col h-full">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          {isSidebarOpen ? "Close" : "Menu"}
        </button>
      </div>
      
      {/* Mobile sidebar */}
      {isSidebarOpen && (
        <div className="md:hidden mb-6 p-4 border rounded-md">
          <Sidebar 
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>
      )}
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-card p-4 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-foreground/70">Total Tasks</h3>
          <p className="text-3xl font-bold">{totalTasks}</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-foreground/70">Completed</h3>
          <p className="text-3xl font-bold">{completedTasks}</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-foreground/70">Progress</h3>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold">{completionPercentage}%</p>
            <div className="w-full bg-muted rounded-full h-2.5">
              <div 
                className="bg-todo-primary h-2.5 rounded-full" 
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Task form */}
      <TaskForm />
      
      {/* Task list */}
      <div className="flex-1">
        <TaskList category={selectedCategory} />
      </div>
    </div>
  );
};

export default Dashboard;

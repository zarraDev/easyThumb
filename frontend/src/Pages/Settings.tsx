import { useState } from 'react';
import { Trash2, Eye, EyeOff, Save } from 'lucide-react';

export default function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    processing: true,
    marketing: false
  });


  const handleSave = () => {
    console.log('Settings saved');
    // Handle save logic
  };

  return (
    <div className="w-full p-6 bg-white dark:bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        

        <div className="w-full flex flex-col lg:flex-row justify-center gap-4">

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
              
              {/* Profile Tab */}
              
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Profile Information</h2>
                  {/* Form */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      UserName
                    </label>
                    <input
                      type="text"
                      defaultValue="Mohamed"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="mohamed@gmail.com"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={handleSave}
                    className="flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 font-medium transition-colors"
                    >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>

            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
              {/* Notifications Tab */}
              
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Notification Preferences</h2>
                  
                  <div className="space-y-4">
                    {[
                      { key: 'email', label: 'Email Notifications', description: 'Receive notifications via email' },
                      { key: 'push', label: 'Push Notifications', description: 'Receive push notifications in your browser' },
                      { key: 'processing', label: 'Processing Updates', description: 'Get notified when thumbnail processing is complete' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">{item.label}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications[item.key as keyof typeof notifications]}
                            onChange={(e) => setNotifications(prev => ({ ...prev, [item.key]: e.target.checked }))}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              
                <div className="pt-6">
                  <button
                    onClick={handleSave}
                    className="flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 font-medium transition-colors"
                    >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>

            </div>
        </div>
            <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
              {/* Privacy & Security Tab */}
              
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Privacy & Security</h2>
                  
                  {/* Change Password */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900 dark:text-white">Change Password</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                    <button className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700">
                      Update Password
                    </button>
                  </div>

                  {/* Privacy Settings */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900 dark:text-white">Privacy Settings</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-sky-600 rounded mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">Make my profile public</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="h-4 w-4 text-sky-600 rounded mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">Allow others to see my thumbnails</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-sky-600 rounded mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">Allow search engines to index my content</span>
                      </label>
                    </div>
                  </div>

                  {/* Data Management */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900 dark:text-white">Data Management</h3>
                    <p className='text-red-400 underline italic'><strong>note:</strong> delete your account we will not return your many</p>
                    <button className="flex items-center px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Account
                    </button>
                  </div>
                </div>

            </div>
          </div>
        
      </div>
    </div>
  );
}
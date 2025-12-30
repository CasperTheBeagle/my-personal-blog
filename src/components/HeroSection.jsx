import React from 'react';

const StyleGuide = () => {
  return (
    <section className="px-6 py-12 bg-white max-w-5xl mx-auto my-12 rounded-3xl shadow-sm border border-brown-200">
      
      <h2 className="text-3xl font-bold text-brown-600 mb-8 text-center">
        Design System Showcase
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* 1. Typography & Colors */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-brown-500 border-b border-brown-300 pb-2">Typography & Colors</h3>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-brown-600">Headline 1</h1>
            <h2 className="text-3xl font-bold text-brown-600">Headline 2</h2>
            <h3 className="text-2xl font-bold text-brown-600">Headline 3</h3>
            <p className="text-brown-400">Body Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Color Swatches */}
            <div className="w-16 h-16 rounded-lg bg-brown-600 shadow-sm" title="Brown 600"></div>
            <div className="w-16 h-16 rounded-lg bg-orange-theme shadow-sm" title="Orange"></div>
            <div className="w-16 h-16 rounded-lg bg-green-theme shadow-sm" title="Green"></div>
            <div className="w-16 h-16 rounded-lg bg-red-theme shadow-sm" title="Red"></div>
          </div>
        </div>

        {/* 2. Buttons (ตามภาพ Component.jpg) */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-brown-500 border-b border-brown-300 pb-2">Buttons</h3>
          
          <div className="flex flex-wrap gap-4 items-center">
            {/* Primary Button */}
            <button className="px-6 py-2 rounded-full bg-brown-600 text-white font-medium hover:bg-brown-500 transition shadow-sm">
              Button
            </button>
            
            {/* Secondary / Outline Button */}
            <button className="px-6 py-2 rounded-full border border-brown-600 text-brown-600 font-medium hover:bg-brown-100 transition">
              Button
            </button>

            {/* Ghost Button */}
            <button className="px-6 py-2 rounded-full text-brown-600 font-medium hover:bg-brown-100 transition">
              Button
            </button>
            
             {/* Disabled Button */}
             <button disabled className="px-6 py-2 rounded-full bg-brown-300 text-white font-medium cursor-not-allowed">
              Disabled
            </button>
          </div>
        </div>

        {/* 3. Inputs (Form Elements) */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-brown-500 border-b border-brown-300 pb-2">Inputs</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-brown-600 mb-1">Label</label>
              <input 
                type="text" 
                placeholder="Placeholder Text" 
                className="w-full px-4 py-2 rounded-lg border border-brown-300 text-brown-600 placeholder-brown-300 focus:outline-none focus:ring-2 focus:ring-orange-theme focus:border-transparent transition"
              />
              <p className="text-xs text-brown-400 mt-1">Help text goes here.</p>
            </div>

             {/* Error Input State */}
             <div>
              <label className="block text-sm font-medium text-red-theme mb-1">Error Label</label>
              <input 
                type="text" 
                placeholder="Invalid input" 
                className="w-full px-4 py-2 rounded-lg border border-red-theme text-brown-600 focus:outline-none focus:ring-1 focus:ring-red-theme"
              />
              <p className="text-xs text-red-theme mt-1">Error message goes here.</p>
            </div>
          </div>
        </div>

        {/* 4. Alerts / Status Cards */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-brown-500 border-b border-brown-300 pb-2">Alerts</h3>
          
          {/* Error Alert (สีแดง) */}
          <div className="p-4 rounded-lg bg-red-theme text-white shadow-sm">
            <h4 className="font-bold text-sm">Attention needed</h4>
            <p className="text-xs mt-1 opacity-90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Success Alert (สีเขียว) */}
          <div className="p-4 rounded-lg bg-green-theme text-white shadow-sm">
            <h4 className="font-bold text-sm">Success!</h4>
            <p className="text-xs mt-1 opacity-90">Your changes have been saved successfully.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StyleGuide;
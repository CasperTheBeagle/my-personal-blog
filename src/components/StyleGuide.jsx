import React from 'react';

const StyleGuide = () => {
    return (
        <section className="main-container">
            <div className="style-guide-wrapper">
                <h2 className="text-center" style={{ marginBottom: '40px' }}>Design System Showcase</h2>

                <div className="sg-grid">

                    {/* Column 1: Typography & Inputs */}
                    <div>
                        <div className="mb-4">
                            <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Typography & Colors</h3>
                            <h1>Headline 1</h1>
                            <h2>Headline 2</h2>
                            <h3>Headline 3</h3>
                            <p>Body Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <div style={{ marginTop: '20px' }}>
                                <span className="color-box" style={{ background: '#26231E' }}></span>
                                <span className="color-box" style={{ background: '#F2B68C' }}></span>
                                <span className="color-box" style={{ background: '#12B279' }}></span>
                                <span className="color-box" style={{ background: '#EB5164' }}></span>
                            </div>
                        </div>

                        <div className="mb-4" style={{ marginTop: '40px' }}>
                            <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Inputs</h3>

                            <label className="label">Label</label>
                            <input type="text" className="input-field" placeholder="Placeholder Text" style={{ marginBottom: '10px' }} />

                            <label className="label" style={{ color: 'var(--color-pink)' }}>Error Label</label>
                            <input type="text" className="input-field error" defaultValue="Invalid input" />
                            <span style={{ color: 'var(--color-pink)', fontSize: '0.8rem' }}>Error message goes here.</span>
                        </div>
                    </div>

                    {/* Column 2: Buttons & Alerts */}
                    <div>
                        <div className="mb-4">
                            <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Buttons</h3>

                            {/* เพิ่ม className="btn-group" ตรงนี้ */}
                            <div className="btn-group">
                                <button className="btn btn-primary">Button</button>
                                <button className="btn btn-outline">Button</button>
                                <button className="btn" style={{ fontWeight: '600' }}>Button</button>
                                <button className="btn btn-disabled">Disabled</button>
                            </div>
                        </div>

                        <div className="mb-4" style={{ marginTop: '40px' }}>
                            <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Alerts</h3>

                            <div className="alert-box alert-error">
                                <strong>Attention needed</strong><br />
                                Lorem ipsum dolor sit amet.
                            </div>

                            <div className="alert-box alert-success">
                                <strong>Success!</strong><br />
                                Your changes have been saved successfully.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StyleGuide;
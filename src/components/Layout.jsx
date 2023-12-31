import React from 'react';

function Layout({ children }) {
    return (
        <div>
            <div className="header">
                <h1>Expense Calculator</h1>
            </div>
            <div className="main">
                <div className="container">{children} </div>
            </div>

            <div className="footer">&copy;2022 Expense Calculator</div>
        </div>
    );
}

export default Layout;

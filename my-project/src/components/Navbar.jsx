import React from 'react';
import { appleImg } from "../utils";

const Navbar = () => {
    return (
        <header>
            <nav>
                <img src={appleImg} alt="Apple Logo" width={14} height={18} />

                <div>
                    {["Phones", "Macbooks", "iPads"].map((nav, i) => (
                        <div>
                            {nav}
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;

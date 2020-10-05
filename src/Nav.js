import React, { useEffect, useState } from "react";
import "./css/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUNfoD///8Ae30AeHoAdXf2+/seiozx+Pja6enO4+ORvr91sbIAgYM7kJJtra8ph4lSnqB/uLm42drA2NmXxsZdoqTo8vLi7Oyw09Ohx8jJ3d6ozc16q6w2lZeGtreuzM0gT78dAAAD8klEQVR4nO3b7XKqMBAGYNgEAuErgKBo1fu/yxO1tShJKxLBnnmfH50602Z2SUgCbjwPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAvI8a9MOWclo1Ch8HCUP9wHQd5ahUJbZMXtFyS5GVlfAojlpnnMgyiMva/iC5jDtseg6nNNQy/atyFQV7t97VqmRR5KfphCOmqFymL/FtBskiKm7sw/I2jhuk+QZ3iAr3IV4Mw/M5NGMdhy36bzT3dUGMIwz84CIOawNT0bnrL4xSxKYy2mJ4iq0wt+8HMnUgfxjD8cvo4Tc0tu2h6DMuF9teTwzAPfy3mLgJ/GLeEEYRTxxLb2Zp2EvijaG8Jw8+nZsi3L7t4Y1iHkn+YOkz5cDFcJMP8dRnWlpZnzlC9LENm2ElcMpx1taDQluHk+9B68eaeS437DjdDyZLh3OvhYNt9MX09tC0XwsF2aQzKzZ2YT8+QlDC13M29806Ny1ZUOGiaTHPNetaZ9BzG3tCJQeIkDBouGMF+/nc1vBymKN1MBhTepygcjP4n4jjcJ7hz9hqDVjeXLwoXek/TtP0w2sThgkXN98NLe5h5Gu2FkfUudef2TQpRkWzW63W0Uk7fU44OI1W7SMexyz3nr22J8RPn75qfi2PxMAAAAAAAAAAAAAAAAOC/Qiz1/ufvoIirY113C30d3Q/kNedPyFN1cCkpWPgQDwtV6H4kEW+uJVJBs2SKlNWtaCPlNEc9Kj7772LmArsb7KtSa+OuqIBYkdxV7aeu2h4vvdaLtauUu7ghiYdyUNI7e3nW1e0hFzm5iEN3X26q2A/dhPuM26stjg17/oYkxlRnrMgWy92H6eBA2LrMnimD0XNLkZWRpYZ25kLXPmOZfy0VjTqHSoyHeWc8EnQZ/S+L/3csMYYkotVej7kH+pL0n/Gw3LaW3tPafIZE7Lj1ygeV/MjCU5rmPOl86lh9yMqenBblfNlNm17wfwivjbddrsJzDVef/uzt1eG4jdof/vuUX/IGm1KW/xKlJuKq62RyVnbdLrbfcz1B3CxZQviNhdJYJj5RsMkXPFF+iyiTP95LTxCOj6pPpZ8v5EMD78H06uT9nntPu2XLAcmxWr35W3x6MdJb5pVtU/Jw70UyfOfSWWJpvvt9ZrXadip94/Qu9PSXddH4uVWIKi/c13W/ht6H7ZNj/HiWIj5K5ebhcjbE9JNCI6sH9gKVzLOC3n5smpz2nTzdJ7LexlHUimufBkK0URRva5nv01NJ/l/M7tt5f51mmWrUx6dG/54VKf353PpoYOmIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgzf0D6XwkVyhz18oAAAAASUVORK5CYII="
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;

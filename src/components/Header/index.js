// import {Link, withRouter} from 'react-router-dom'

// import Cookie from 'js-cookie'

// import './index.css'

// const Header = props => {
//   const onClickLogout = () => {
//     Cookie.remove('jwt_token')
//     const {history} = props
//     history.replace('/login')
//   }
//   return (
//     <nav className="nav-header">
//       <div className="nav-content">
//         <img
//           className="website-logo"
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//           alt="website logo"
//         />
//         <ul className="nav-menu">
//           <li>
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/products" className="nav-link">
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link to="/cart" className="nav-link">
//               Cart
//             </Link>
//           </li>
//         </ul>
//         <button
//           type="button"
//           className="logout-desktop-btn"
//           onClick={onClickLogout}
//         >
//           Logout
//         </button>
//         <button
//           type="button"
//           className="logout-mobile-btn"
//           onClick={onClickLogout}
//         >
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
//             alt="logout icon"
//             className="logout-icon"
//           />
//         </button>
//       </div>
//     </nav>
//   )
// }
// export default withRouter(Header)

import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />

          <button type="button" className="nav-mobile-btn" onClick={onLogout}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-content nav-bar-large-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <ul className="nav-menu">
            <Link to="/" className="nav-menu-item">
              Home
            </Link>
            <Link to="/products" className="nav-menu-item">
              Products
            </Link>
            <Link to="/cart" className="nav-menu-item">
              Cart
            </Link>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <Link to="/" className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-bar-img"
            />
          </Link>

          <Link to="/products" className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-bar-img"
            />
          </Link>

          <Link to="/cart" className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-bar-img"
            />
          </Link>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Header)

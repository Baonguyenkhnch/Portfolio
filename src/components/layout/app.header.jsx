import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { useCurrentApp } from '../context/app.context';
import { useTranslation } from 'react-i18next';
import { NavDropdown } from 'react-bootstrap';
import viFlag from '../../assets/svg/language/vi.svg';
import enFlag from '../../assets/svg/language/en.svg';

function AppHeader() {
    const { theme, setTheme } = useCurrentApp();
    const { t, i18n } = useTranslation();

    const handleMode = (mode) => {
        localStorage.setItem("theme", mode);
        document.documentElement.setAttribute('data-bs-theme', mode);
        setTheme(mode);
    };

    const renderFlag = (language) => {
        return (
            <img
                style={{ height: 20, width: 20 }}
                src={language === "en" ? enFlag : viFlag}
                alt={language}
            />
        );
    };

    return (
        <Navbar
            data-bs-theme={theme}
            expand="lg"
            className="bg-body-tertiary shadow-sm"
            style={{ zIndex: 1 }}
        >
            <Container>
                {/* 🏠 Logo / Brand */}
                <Link className="navbar-brand fw-bold" to="/">
                    <span className='brand-green'>
                        {t("BaoNguyen")}
                    </span>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* 🔗 Menu chính */}
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">{t("appHeader.home")}</NavLink>
                        <NavLink className="nav-link" to="/project">{t("appHeader.project")}</NavLink>
                        <NavLink className="nav-link" to="/about">{t("appHeader.about")}</NavLink>

                        {/* 🌤 Dự báo thời tiết */}
                        <NavLink className="nav-link" to="/weather">🌤 Dự báo thời tiết</NavLink>

                        {/* 💱 Quy đổi tiền tệ */}
                        <NavLink className="nav-link" to="/currency">💱 Quy đổi tiền tệ</NavLink>
                    </Nav>

                    {/* ⚙️ Chuyển theme + ngôn ngữ */}
                    <Nav className="ms-auto">
                        {/* Light/Dark Mode Toggle */}
                        <div className='nav-link' style={{ cursor: "pointer" }}>
                            {theme === "light" ? (
                                <MdOutlineLightMode
                                    onClick={() => handleMode("dark")}
                                    style={{ fontSize: 20 }}
                                />
                            ) : (
                                <MdNightlight
                                    onClick={() => handleMode("light")}
                                    style={{ fontSize: 20 }}
                                />
                            )}
                        </div>

                        {/* 🌐 Ngôn ngữ */}
                        <NavDropdown title={renderFlag(i18n.resolvedLanguage)}>
                            <div
                                onClick={() => i18n.changeLanguage("en")}
                                className='dropdown-item d-flex gap-2 align-items-center'
                                style={{ cursor: "pointer" }}
                            >
                                <img style={{ height: 20, width: 20 }} src={enFlag} alt='english' />
                                <span>English</span>
                            </div>

                            <div
                                onClick={() => i18n.changeLanguage("vi")}
                                className='dropdown-item d-flex gap-2 align-items-center'
                                style={{ cursor: "pointer" }}
                            >
                                <img style={{ height: 20, width: 20 }} src={viFlag} alt='vietnamese' />
                                <span>Tiếng Việt</span>
                            </div>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader;

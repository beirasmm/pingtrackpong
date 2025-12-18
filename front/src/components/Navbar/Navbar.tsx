import './Navbar.css';
import { Settings, LogOut } from 'lucide-react';
import { Logo } from '../Logo';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';

interface NavbarProps {
  activeSection: 'home' | 'dashboard' | 'technology';
  setActiveSection: (section: 'home' | 'dashboard' | 'technology') => void;
}

export function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const handleLogout = () => alert('Cerrando sesión...');
  const handleEditProfile = () => alert('Abriendo editor de perfil...');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo y título */}
        <div className="navbar-logo">
          <div className="w-12 h-12">
            <Logo />
          </div>
          <div>
            <h1>PingTrackPong</h1>
            <p>Datos inteligentes para tu juego</p>
          </div>
        </div>

        {/* Navegación y menú de usuario */}
        <div className="navbar-user">
          {/* Botones de secciones */}
          <div className="navbar-sections">
            {['home', 'dashboard', 'technology'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section as any)}
                className={`navbar-section-btn ${activeSection === section ? 'active' : ''}`}
              >
                {section === 'home'
                  ? 'Inicio'
                  : section === 'dashboard'
                  ? 'Dashboard'
                  : 'Tecnología'}
              </button>
            ))}
          </div>

          {/* Menú de usuario */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="navbar-avatar-btn">
                <div className="navbar-avatar">
                  <div className="navbar-avatar-fallback">MD</div>
                </div>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="navbar-dropdown" align="end">
              <DropdownMenuLabel className="navbar-dropdown-label">
                <p>Marc Durán</p>
                <p>marc.duran@gmail.com</p>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="navbar-dropdown-item" onClick={handleEditProfile}>
                <Settings className="mr-2 h-4 w-4" /> Editar perfil
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="navbar-dropdown-item logout"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" /> Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

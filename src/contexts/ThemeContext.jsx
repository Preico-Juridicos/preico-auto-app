import React, { createContext, useState, useContext } from "react";

// Crear el contexto para el tema
const ThemeContext = createContext(undefined);

// Componente del proveedor del tema
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para alternar entre modos de tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el contexto del tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};


// #f2e8cf #e2d3b6 #cdcdcb #ddc9bb #c5d3cf



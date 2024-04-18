import cl from "./MainLayout.module.css";

const MainLayout: FCC = ({ children }) => (
  <div className={cl.MainLayout}>
    <div className={cl.MainLayoutInner}>{children}</div>
  </div>
);

export default MainLayout;

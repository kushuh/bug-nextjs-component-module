import {FC, ReactNode} from "react";

const Layout: FC<{ children: ReactNode }> = ({children}) => (
  <html>
    <body>
      {children}
    </body>
  </html>
);

export default Layout;

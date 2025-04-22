import "./globals.css";

export const metadata = {
  title: "NCICRCET'24 - National Conference on Innovative Computing Research",
  description: "2nd National Conference on Innovative Computing Research and Cutting Edge Technologies in Computer Science and Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "ICICRCET'25 - International Conference on Innovative Computing Research and Cutting Edge Technologies in Computer Science and Engineering",
  description: "International Conference on Innovative Computing Research and Cutting Edge Technologies in Computer Science and Engineering",
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

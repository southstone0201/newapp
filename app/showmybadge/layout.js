export default function Layout(props) {
  return (
    <html>
      <body>
        <h1>My Badge</h1>
        {props.children}
      </body>
    </html>
  );
}
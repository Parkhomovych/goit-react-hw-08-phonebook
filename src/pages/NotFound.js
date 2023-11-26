import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <Helmet>
      <title>NotFound</title>
      <div>Sorry, page not found. Please return to home page!</div>
    </Helmet>
  );
}

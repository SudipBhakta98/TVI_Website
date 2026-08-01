import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Technovision Industries</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-black text-[#12161A] mb-2">404</h1>
        <p className="text-slate-600 mb-6">The page you're looking for doesn't exist.</p>
        <Link to="/" className="text-red-600 font-bold hover:text-lime-600">
          Back to Home →
        </Link>
      </div>
    </>
  );
}
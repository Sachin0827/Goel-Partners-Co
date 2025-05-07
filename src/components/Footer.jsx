export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Jagdish Aggarwal & Co. All rights reserved.
      </div>
    </footer>
  );
}
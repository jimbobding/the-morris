export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center space-y-2">
      <p className="text-sm">&copy; 2025 The Morris. All rights reserved.</p>
      <p className="text-sm">
        Visit our sister venue{" "}
        <a
          href="https://www.blinkerbar.co.uk/"
          className="inline-block px-4 py-2 border-b-2 border-transparent text-green-400 hover:border-green-400 transition-all duration-300 hover:-translate-y-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          BLINKER
        </a>
      </p>
    </footer>
  );
}

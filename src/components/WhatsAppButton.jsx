import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/524423696198"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition duration-300 hover:scale-110">
        <FaWhatsapp size={35} />
      </div>
    </a>
  );
}

export default WhatsAppButton;
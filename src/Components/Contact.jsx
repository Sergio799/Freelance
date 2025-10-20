import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";
import { EMAILJS_CONFIG } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      );
      setError(false);
      formRef.current.reset();
    } catch (err) {
      console.error("Email send failed:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-xs text-neutral-600 font-mono">.03</span>
        </div>

        {/* Side navigation - hidden on mobile */}
        <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 hover:bg-white transition-colors cursor-pointer" />
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 hover:bg-white transition-colors cursor-pointer" />
          <div className="w-1.5 h-1.5 rounded-full bg-white transition-colors cursor-pointer" />
        </div>

        {/* Top right links - hidden on mobile */}
        <div className="hidden md:flex absolute top-8 right-8 gap-4 sm:gap-6 text-[10px] sm:text-xs tracking-wider">
          <span className="text-neutral-500 hover:text-white transition-colors cursor-pointer">BEHANCE</span>
          <span className="text-neutral-500 hover:text-white transition-colors cursor-pointer">DRIBBLE</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mt-8 sm:mt-12 md:mt-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 sm:mb-10 md:mb-12 tracking-tight">
              CONTACT
            </h2>
            
            <div className="space-y-6 sm:space-y-8 text-neutral-400">
              <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                Have a project in mind or just want to say hello? Feel free to reach out. 
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-neutral-600 uppercase mb-2">Address</h3>
                  <p className="text-white text-sm sm:text-base">Charlotte, North Carolina</p>
                </div>

                <div>
                  <h3 className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-neutral-600 uppercase mb-2">Phone</h3>
                  <a href="tel:+19807770966" className="text-white text-sm sm:text-base hover:text-neutral-300 transition-colors">
                    +1 (980) 777-0966
                  </a>
                </div>

                <div>
                  <h3 className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-neutral-600 uppercase mb-2">E-mail</h3>
                  <a href="mailto:karumuruamruthareddy@gmail.com" className="text-white text-sm sm:text-base hover:text-neutral-300 transition-colors break-all">
                    karumuruamruthareddy@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 md:mb-12 tracking-tight">
              CONTACT FORM
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5 sm:space-y-6">
              <div>
                <label className="block text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-neutral-600 uppercase mb-2 sm:mb-3" htmlFor="name">
                  Your name
                </label>
                <input
                  placeholder=""
                  className="w-full px-0 py-2.5 sm:py-3 bg-transparent text-white text-sm sm:text-base border-b border-neutral-700 focus:border-white transition-colors placeholder-neutral-600 outline-none"
                  required
                  type="text"
                  name="user_name"
                  id="name"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-neutral-600 uppercase mb-2 sm:mb-3" htmlFor="email">
                  Your email
                </label>
                <input
                  placeholder=""
                  className="w-full px-0 py-2.5 sm:py-3 bg-transparent text-white text-sm sm:text-base border-b border-neutral-700 focus:border-white transition-colors placeholder-neutral-600 outline-none"
                  required
                  type="email"
                  name="user_email"
                  id="email"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-neutral-600 uppercase mb-2 sm:mb-3" htmlFor="message">
                  Message
                </label>
                <textarea
                  placeholder=""
                  className="w-full px-0 py-2.5 sm:py-3 bg-transparent text-white text-sm sm:text-base border-b border-neutral-700 focus:border-white transition-colors placeholder-neutral-600 outline-none min-h-[100px] resize-none"
                  required
                  name="message"
                  id="message"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-white/20 transition-all duration-300 touch-manipulation ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {error !== null && (
                <div className={`text-xs sm:text-sm ${error ? "text-red-400" : "text-green-400"}`}>
                  {error ? "Failed to send message" : "Message sent successfully!"}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom right icon - hidden on mobile */}
        <div className="hidden sm:block absolute bottom-8 right-8">
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

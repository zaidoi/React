const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [generateOtp, setGenerateOtp] = useState("");
  const [btnEnabled, setBtnEnabled] = useState(true);
  const [countdown, setCountdown] = useState(0);

  const intervalRef = useRef(null); // ✅ store interval ID here

  const handleClick = () => {
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    setGenerateOtp(otp);
    setCountdown(5);       // start countdown
    setBtnEnabled(false);  // disable button
  };

  useEffect(() => {
    if (countdown === 0) {
      setBtnEnabled(true);      // enable button when countdown finishes
      clearInterval(intervalRef.current); // cleanup interval
      intervalRef.current = null;
      return;
    }

    // clear any existing interval before starting a new one
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current); // cleanup on unmount
  }, [countdown]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {generateOtp ? generateOtp : "Click 'Generate OTP' to get a code"}
      </h2>

      <p id="otp-timer" aria-live="polite">
        {countdown > 0
          ? `Expires in: ${countdown} seconds`
          : generateOtp
          ? "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>

      <button
        id="generate-otp-button"
        onClick={handleClick}
        disabled={!btnEnabled} // disable while countdown
      >
        Generate OTP
      </button>
    </div>
  );
};

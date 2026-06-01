function Step3({ watch }) {
  const data = watch();

  return (
    <div className="space-y-5 text-left">
      <h2 className="text-2xl font-semibold text-[#f7d978]">Review & Submit</h2>

      <div className="grid grid-cols-1 gap-3 rounded-lg border border-[#d4af37]/25 bg-black/35 p-5">
        <div className="text-white/75">First Name: <span className="ml-2 font-semibold text-white">{data.firstName}</span></div>
        <div className="text-white/75">Last Name: <span className="ml-2 font-semibold text-white">{data.lastName}</span></div>
        <div className="text-white/75">Date of Birth: <span className="ml-2 font-semibold text-white">{data.dob}</span></div>
        <div className="text-white/75">Email: <span className="ml-2 font-semibold text-white">{data.email}</span></div>
      </div>
    </div>
  );
}

export default Step3;

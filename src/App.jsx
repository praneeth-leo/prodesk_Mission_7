import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, stepFields } from "./schemas/validationSchema";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import ProgressBar from "./components/ProgressBar";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import { Check } from "lucide-react";

function App() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stepValid, setStepValid] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    trigger,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {}
  });

  const watchedStepValues = useWatch({
    control,
    name: stepFields[step] || []
  });

  // Keep validating current step as fields change so Next can be enabled/disabled.
  useEffect(() => {
    const fields = stepFields[step] || [];

    const validate = async () => {
      if (fields.length === 0) {
        setStepValid(true);
        return;
      }

      const ok = await trigger(fields);
      setStepValid(!!ok);
    };

    validate();
  }, [step, trigger, watchedStepValues]);

  const nextStep = async () => {
    if (stepValid) setStep((s) => Math.min(3, s + 1));
  };

  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    console.log("Complete form data:", data);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#020503] px-6">
        <Card className="flex flex-col items-center gap-6 p-12 text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#d4af37]/40 bg-emerald-950/50 shadow-lg shadow-[#d4af37]/20">
            <div className="flex h-20 w-20 animate-bounce items-center justify-center rounded-full bg-gradient-to-br from-[#f7d978] to-[#b8871f] shadow-md">
              <Check size={36} className="text-black" />
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-[#f7d978]">All Set - Welcome aboard!</h2>
          <p className="text-white/80">Your account has been created successfully.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020503] bg-[radial-gradient(circle_at_top,#0f5135_0%,transparent_34%),linear-gradient(180deg,#020503,#06100b_48%,#010201)] px-6 py-12">
      <div className="w-full max-w-4xl">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <h1 className="text-4xl font-bold text-white">Registration Wizard</h1>
        </div>

        <ProgressBar step={step} />

        <Card>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {step === 1 && <Step1 register={register} errors={errors} />}
            {step === 2 && <Step2 register={register} errors={errors} />}
            {step === 3 && <Step3 watch={watch} />}

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {step > 1 && (
                  <Button type="button" onClick={prevStep} variant="ghost">
                    Back
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-3">
                {step < 3 ? (
                  <Button type="button" onClick={nextStep} disabled={!stepValid}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit" loading={loading}>
                    Submit
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default App;

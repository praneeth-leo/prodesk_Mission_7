import Input from './ui/Input';
import PasswordField from './ui/PasswordField';
import { Mail } from 'lucide-react';

function Step2({ register, errors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#f7d978]">Account Details</h2>

      <Input
        label="Email"
        name="email"
        placeholder="you@company.com"
        register={register}
        icon={Mail}
        error={errors.email?.message}
      />

      <PasswordField
        register={register}
        name="password"
        label="Password"
        placeholder="Choose a strong password"
        error={errors.password?.message}
      />

      <PasswordField
        register={register}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Re-enter your password"
        error={errors.confirmPassword?.message}
      />
    </div>
  );
}

export default Step2;

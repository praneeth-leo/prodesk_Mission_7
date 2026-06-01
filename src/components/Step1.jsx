import Input from './ui/Input';
import { User, Calendar } from 'lucide-react';

function Step1({ register, errors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#f7d978]">Personal Information</h2>

      <Input
        label="First Name"
        name="firstName"
        placeholder="Enter your first name"
        register={register}
        icon={User}
        error={errors.firstName?.message}
      />

      <Input
        label="Last Name"
        name="lastName"
        placeholder="Enter your last name"
        register={register}
        icon={User}
        error={errors.lastName?.message}
      />

      <Input
        label="Date of Birth"
        name="dob"
        type="date"
        register={register}
        icon={Calendar}
        error={errors.dob?.message}
      />
    </div>
  );
}

export default Step1;

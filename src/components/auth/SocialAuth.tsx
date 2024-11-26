import React from 'react';
import { Chrome } from 'lucide-react';
import AuthButton from './AuthButton';

interface SocialAuthProps {
  onGoogleSignIn: () => void;
}

export default function SocialAuth({ onGoogleSignIn }: SocialAuthProps) {
  return (
    <>
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">
            Or continue with
          </span>
        </div>
      </div>

      <AuthButton
        type="button"
        variant="secondary"
        onClick={onGoogleSignIn}
      >
        <div className="flex items-center justify-center">
          <Chrome className="w-5 h-5 mr-3" />
          Continue with Google
        </div>
      </AuthButton>
    </>
  );
}
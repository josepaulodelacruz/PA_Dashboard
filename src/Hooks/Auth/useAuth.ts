import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthStore {
  isSessionActive: boolean;
  sessionTimeStamp: string | null;
  expirySessionTimeStamp: string | null;
  onSetSession: (isSession: boolean) => void;
  onInitialize: () => void;
}

const useAuth = create<AuthStore>()(
  persist(
    (set, get) => ({
      isSessionActive: false,
      sessionTimeStamp: null,
      expirySessionTimeStamp: null,
      onSetSession: (isSession) => {
        const now = new Date();
        set({
          isSessionActive: isSession,
          sessionTimeStamp: isSession ? now.toISOString() : null,
          expirySessionTimeStamp: isSession ? new Date(now.getTime() + 60 * 60 * 1000).toISOString() : null, // 1 hour expiration
        });
      },
      onInitialize: () => {
        const { isSessionActive, sessionTimeStamp, expirySessionTimeStamp } = get();
        const now = new Date();
        if (isSessionActive && sessionTimeStamp && expirySessionTimeStamp) {
          const expiryDate = new Date(expirySessionTimeStamp);
          if (now > expiryDate) {
            // Session expired
            set({
              isSessionActive: false,
              sessionTimeStamp: null,
              expirySessionTimeStamp: null,
            });
          }
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuth;
